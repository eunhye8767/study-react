import { getAllPostIds, getPostData } from '@/lib/post'
import { GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'

import Head from 'next/head'
import homeStyles from '@/styles/Home.module.css'

const Post = ({postData}:{postData: {
  title: string
  date: string
  contentHtml: string
}}) => {
  return (
    <div className={homeStyles.container}>
      <Head><title>{postData.title}</title></Head>
      <article>
        <h1 className={homeStyles.headingXl}>{postData.title}</h1>
        <div className={homeStyles.lightText}>{postData.date}</div> 
        <div dangerouslySetInnerHTML={{__html: postData.contentHtml}}></div>
      </article>
    </div>
  )
}

export default Post

// Post 데이터를 가져와야 하는 경로 목록을 가져오기
export const getStaticPaths: GetStaticPaths = async() => {
  // getAllPostIds()는 /lib/post.ts에서 만들어서 사용.
  const paths = getAllPostIds()
  
  console.log('paths', paths)  
  // [ {params: {id: 'pre-rendering'}}, {params: {id: 'ssg-ssr'}}]

  return {
    /**
     *  fallback
     *    - false 라면 getStaticPaths로 리턴되지 않는 것은 모두 404 페이지가 뜹니다.
     *    - true 라면 getStaticPaths로 리턴되지 않는 것은 404로 뜨지 않고 , 
     *      fallback 페이지가 뜨게 됩니다.
     */
    paths,
    fallback: false
  }
}

// 전달받은 아이디를 이용해서 해당 포스트의 데이터 가져오기
export const getStaticProps: GetStaticProps = async ({params}) => {
  console.log('params', params);
  // {id: 'ssg-ssr}

  // getPostData()는 /lib/post.ts에서 만들어서 사용.
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData
    }
  }
}