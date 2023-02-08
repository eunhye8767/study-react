import fs from 'fs' // file system 모듈 (nodejs 모듈)
import path from 'path' // (nodejs 모듈)

// https://www.npmjs.com/package/gray-matter 
// npm install --save gray-matter 설치
import matter from 'gray-matter' 
import { remark } from 'remark'
import html from 'remark-html'
import remarkHtml from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

// 프로젝트 현재 폴더 경로
console.log('process.cwd', process.cwd())

// 프로젝트 현재 폴더 경로 내 posts
console.log('postDirectory', postsDirectory);

export function getSortedPostsData() {
  // Get file names under /posts
  // file system 모듈을 이용해 파일을 읽어준다.
  // fileNames = ['pre-rendering.md','ssg-ssr.md']
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string })
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse(분석) the post metadata section
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string
  // markdown 파일을 HTML 태그로 변경해주는 remark
  const processedContent = await remark()
    .use(remarkHtml)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string })
  }
}
