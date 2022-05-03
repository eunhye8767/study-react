<br />

# 따라하며 배우는 노드, 리액트 시리즈 - 기본 강의
https://inf.run/64Pg

<br />

#### Request와 Response
- **Request** : 웹 브라우저(클라이언트)를 통해 서버에 요청하는것
- **Response** : 서버에서 웹 브라우저(클라이언트)에 응답하는 것

<br />
<hr />
<br />

# 1. Node JS
## 1.1. 소개
#### 보일러플레이트란?
- 어떤 웹사이트를 만들 때 로그인, sign up은 어디든 들어간다. 그래서 어떤 프로젝트를 시작할 때 처음부터 만드는 것이 아니라 자주 쓰인 기능을 미리 만들어두어 재사용한다는 걸 의미한다.
- 컴퓨터 프로그래밍에서 보일러플레이트 또는 보일러플레이트 코드라고 부르는 것은 최소한의 변경으로 여러곳에서 재사용되며, 반복적으로 비슷한 형태를 띄는 코드를 말한다.

<br />
<br />

## 1.2. NODE JS 와 EXPRESS JS 다운로드 하기
### 1.2.1. NODE JS
- nodejs가 나오기 전까지는 자바스크립트를 항상 브라우저 속에서만 사용했는데, nodejs가 나오므로 인해서 자바스크립트를 브라우저(크롬, 익스플로러 등)가 아닌 서버사이드에서도 쓸 수 있게 되었다.
- ※ 서버 사이드(server-side)란 네트워크의 한 방식인 클라이언트-서버 구조의 서버 쪽에서 행해지는 처리를 말한다.

<br />

### 1.2.2. EXPRESS JS
- nodejs가 자동차의 엔진이라고 생각하면 그 엔진을 가지고 자동차의 바퀴, 브레이크 시스템 등을 만드는 것처럼 자동차를 만드는 것이 EXPRESS JS이다.<br />(자동차(웹사이트, 어플리케이션)을 쉽게 만들 수 있게 도와준다고 이해하기.)
- nodejs를 좀 더 쉽게 이용할 수 있게 해주는 프레임워크라고 이해하면 된다.

### 1.2.3. 다운로드하기
1. nodejs : 터미널 창에서 `node -v` 명령어를 입력하여 설치 유무를 확인한다.
2. boiler-plate 프로젝트 폴더를 생성한다.
3. 해당 프로젝트 폴더를 기준으로 `npm init` 명령어를 실행하여 `package.json` 파일을 생성한다.
4. `index.js` 파일을 생성한다.<br />package 서버를 시작하면 index.js에서 시작을 한다. 시작점이라고 생각하면 된다.
5. EXPRESS JS 다운 받는다. 터미널 창에서 `npm install express --save` 명령어를 실행한다.<br />`package.json` 파일을 보면 "dependencies" > "express"가 추가된 것을 확인할 수 있고 버전 정보를 알 수 있다.<br />즉, `package.json` 파일에서 버전 정보 뿐 아니라 사용하고 있는 것들을 한 눈에 확인할 수 있다.
    ```javascript
    // package.json
    {
        "dependencies": {
            "express": "^4.17.1"
        }
    }
    ```
6. 다운받은 dependencies들은 `boiler-plate/node_modules` 폴더에서 관리된다.
7. index.js에서 기본적인 express js 앱 만들기<br />[Express 참고 문서 바로보기](https://expressjs.com/en/starter/hello-world.html)<br />* <b>require</b> : Node JS에서는 require 메서드를 통해 외부 모듈을 가져올 수 있다.
    ```javascript
    // index.js
    
    // express 모듈을 가져온다.
    const express = require('express')
    
    // express() 을 이용하여 새로운 app을 만든다.
    const app = express()

    // port를 설정한다. 아무 번호나 상관없지만 5000번으로 적용함.
    const port = 5000

    // / 경로에 hello world를 출력한다.
    app.get('/', (req, res) => res.send('Hello World!'))

    app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
    ```
8. `package.json` 파일에서 `"start": "node index.js"`을 scripts에 추가한다.
    ```javascript
    // package.json
    "scripts": {
        "start": "node index.js",
    ```
9. 터미널 창에서 `npm run start` 명령어를 실행한다. start를 하게 되면 `node index.js`파일이 실행된다.<br />명령어 입력 후, 터미널 창에서 보면 `console.log(Example app listening at http://localhost:${port}))` 이 메세지를 확인할 수 있다. `${port}`에 내가 입력한 port 번호가 적용되어 있다.<br />
    ![1-1-1](./img/1-1-1.png)

<br />
<br />

## 1.3. 몽고 DB 연결
1. [몽고DB 사이트](https://www.mongodb.com/)에서 회원 가입하기.<br />(몽고DB는 크로스 플랫폼 도큐먼트 지향 데이터베이스 시스템.)
2. CLUSTER(클러스터) 만들기. (Build a New Cluster)<br />2-1. 클라우드는 아무 것이든 선택이 가능한데 aws로 선택.<br />2-2. 국가는 무료 중에서 제일 가까운 나라를 선택하면 된다.<br />2-3. Cluster Tier에서는 M0 Sandbox를 선택한다.<br />2-4. Cluster Name을 써주고 Create Cluster를 클릭하면 된다.
3. 유저 아이디를 생성한다.
4. 생성한 Cluster의 Connect > Connect your application을 클릭한다.<br />
    ![1-3-1](./img/1-3-1.png)<br />
5. Add your connection string into your application code 부분의 코드를 복사한다.<br />그리고 index.js에 일단 붙여넣기 한다.
    ![1-3-2](./img/1-3-2.png)<br />
6. Mongoose 알아보기, [사이트 바로가기](https://www.npmjs.com/package/mongoose)<br />6-1. 간단하게 몽고DB를 편하게 쓸 수 있는 Object Modeling Tool.<br />6-2. Mongoose 다운로드, 터미널에서 `npm install mongoose --save` 명령어 실행.<br />6-3. 설치가 완료되면, package.json > dependencies에 "mongoose"가 추가 되었다.<br />
    ![1-3-3](./img/1-3-3.png)<br />
7. Mongodb를 연결한다.<br />7-1. `const mongoose` 변수를 만들고 아까 복사해둔 `mongodb_srv`를 연결해준다.
    ```javascript
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://leh:<password>@boilerplate.0v2t3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
    ```
8. 그리고 connect 안에 `useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, usefindAndModify: false` 정보를 넣어준다.<br />해당 코드를 적용하지 않을 경우 에러가 발생한다. 적용해줘야 에러 발생이 되질 않는다.
    ```javascript
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://leh:<password>@boilerplate.0v2t3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, usefindAndModify: false
    })
    ```
9. `<password>` 부분에 해당 비밀번호를 기입하고 연결이 잘 되었을 때(then), 에러가 생겼을 때(catch)의 콘솔 메세지를 적용해준다.
    ```javascript
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://leh:pcepys71317@boilerplate.0v2t3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, usefindAndModify: false
    }).then(()=> console.log('MongoDB Connected...'))
      .catch(err => console.log(err));
    ```
10. 터미널 창에서 `npm run start` 명령어를 실행하여 프로젝트와 몽고DB를 연결한다.<br />※ 6.0이상부터는 `useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, usefindAndModify: false` 내용이 기본적으로 적용되어 있어 주석처리 또는 삭제후 실행하면 된다.
    ```javascript
    const mongoose = require('mongoose');
    mongoose.connect('mongodb+srv://leh:pcepys71317@boilerplate.0v2t3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
        .then(()=> console.log('MongoDB Connected...'))
        .catch(err => console.log(err));
    ```
    ![1-3-4](./img/1-3-4.png)<br />

<br />
<br />

## 1.4. MongoDB Model & Schema
### 1.4.1. Model(모델)? Schema(스키마)?
- **Model은** Schema를 감싸주는 역활.
- 아래 코드를 Schma 라고 한다.<br />어떤 상품에 관련된 글을 작성한다고 했을 때, 글을 작성한 사람이 누구인지(writer)? 포스트의 이름이 무언지(title)? 타입은? 길이는?<br />이렇게 **하나하나 정보를 지정을 해주는 것이 Schema**를 통해서 할 수 있는 것이다.
    ```javascript
    const productSchema = mongoose.Schema({
        writer: {
            type: Schema.Types.objectId,
            ref: 'User'
        },
        title: {
            type: String,
            maxlength: 50
        },
        description: {
            type: String
        }
    }, { timestamps: true})
    ```
<br />

### 1.4.2. User Model 만들기
1. 해당 프로젝트 안에 `models` 이라는 폴더를 만들고 `User.js` 파일을 하나 생성한다.
2. 제일 먼저, mongoose 모듈을 가져온다.<br />* `require()` 메서드를 통해 외부 모듈을 가져올 수 있다.
    ```javascript
    const mongoose = require('mongoose');
    ```
3. 가져온 mongoose 모듈을 이용하여 Schema를 생성한다.<br />3-1. <b>trim</b> : 어떤 유저가 `john ahn@naver.com`을 입력했을 때, john과 ahn 사이에 공백이 있다. 이런 사이의 <b>공백을 없애주는 역활이 trim</b>이다.<br />3-2. <b>unique</b> : 중복되지 않게 설정.<br />3-3. <b>role</b> : 유저가 관리자가 될 수 있고 일반 회원이 될 수 있어서 type을 Number로 지정. 관리자일 때는 1, 따로 지정하지 않으면(default) 0.<br />3-4. <b>image</b>의 경우 String으로만 적용(한줄로 작성이 가능)<br />3-5. <b>token</b> : 나중에 유효성 검사를 위해 적용<br />3-6. <b>tokenExp</b> : token(토큰) 유효기간을 뜻한다.
    ```javascript
    const userSchema = mongoose.Schema({
        name: {
            type: String,
            maxlength: 50,
        },
        email : {
            type: String,
            trim: true,
            unique: 1,
        },
        password: {
            type: String,
            minlength: 5
        },
        lastname: {
            type: String,
            maxlength: 50
        },
        role: {
            type: Number,
            default: 0
        },
        image: String,
        token: {
            type: String
        },
        tokenExp: {
            type: Number
        }
    })
    ```
4. 작성한 Schema를 Model로 감싸준다. `const 변수이름 = mongoose.model('모델이름', 생성한 스키마 이름)`
    ```javascript
    const User = mongoose.model('User', userSchema);
    ```
5. 그리고 생성한 모듈을 다른 곳에서도  쓸 수 있게 `module.exports ={}`를 해준다.
    ```javascript
    const User = mongoose.model('User', userSchema);

    module.exports = { User };
    ```

<br />
<br />

## 1.5. Git 설치
- [Git 다운로드 사이트](https://git-scm.com/)
- Git 설치 유무 확인 : `git --version`
- `git init` = 깃 저장소 생성.<br />`git status` = 깃 현재 상태
- 특정 폴더를 빼고 git에 업로드 해야할 경우, `.gitignore` 파일을 만들고 `node_modules`를 기입한다.<br />그리고 `git add .`로 하면 nodo_modules 폴더가 포함되지 않는다는 걸 확인할 수 있다.

<br />
<br />

## 1.6. SSH를 이용해 GITHUB 연결
- 안전하게 통신 하려면? SSH(Secure Shell)를 설정하자.

<br />

### 1.6.1. SSH(Secure Shell) 설정하기
1. 먼저, SSH 설정되어 있는 지 터미널에서 `ls -a ~/.ssh` 명령어를 실행하여 확인한다.<br />
    ![1-6-1](./img/1-6-1.png)<br />
2. `id_rsa` , `id_rsa.pub` 가 출력되지 않았다면 SSH를 설정해야 한다.<br />
    ![1-6-2](./img/1-6-2.png)<br />
3. 구글에서 "GIT SSH"를 검색한다.<br />([Git SSH 설정 자세히보기](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent))
4. 위 해당 페이지에서 컴퓨터 운영체제에 맞게 설정해주면 된다.
5. SSH 키를 생성한다. [SSH 생성하는 법, 자세히보기](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#generating-a-new-ssh-key)<br />5-1. 터미널에서 `ssh-keygen -t ed25519 -C "your_email@example.com"`에서 이메일은 본인의 이메일 주소를 적용한다.<br />5-2. 이메일 주소를 적용한 후 enter키 누르면 된다.
6. SSH Agent를 Background에 킨다. [자세히 보기](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)<br />6-1. 터미널에 `eval "$(ssh-agent -s)"` 실행한다.<br />6-2. `ssh-add ~/.ssh/id_ed25519` 실행한다. (private key (id_rsa)를 추가한다)
7. 해당 git 계정에 생성한 SSH를 추가해줘야 한다. [자세히 보기](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

<br />

### 1.6.2. SSH 삭제할 경우
1. C드라이드 > 사용자 화면에서 `.ssh` 폴더를 삭제 하면 된다.

<br />
<br />

## 1.7. BodyParser & PostMan & 회원 가입 기능
### 1.7.1. 회원가입 기능 만들기
1. Client - Server 통신하는 법<br />1-1. Client == 브라우저 (크롬, ie, 사파리 등)<br />1-2. 브라우저에서 기입한 정보 데이터는 Body-parser Dependency를 이용하여 Client → Server에 전달하려고 한다.<br />1-3. Body-parser Dependency는 `npm install body-parser --save` 명령어를 실행하여 설치한다.<br />
    ![1-7-1](./img/1-7-1.png)<br />

2. POST MAN도 다운로드 한다.<br />2-1.로그인, 회원가입 등을 할 수 있게 만들어놓은 것이 없어 Client 대체로 POST MAN을 다운로드 한다.<br />2-2. [POST MAN 다운로드하기](https://www.postman.com/downloads/?utm_source=postman-home)<br />
    ![1-7-2](./img/1-7-2.png)<br />

3. Register Route 만들기<br />3-1. 지난 시간에 간단한 라우터 `app.get('/', (req, res) => res.send('Hello World!'))` 작성 참고<br />3-2. 이번엔 회원가입을 위한 라우터를 만든다.

4. 회원 가입 할 때 필요한 정보들을 Client에서 가져오면 그것들을 데이터베이스에 넣어준다.<br />4-1. 데이터베이스에 넣어주기 위해선 지난 시간에 작성한 `models/User.js` 파일을 가져 온다.<br />4-2. 불러온 User를 이용하여 인스턴스를 생성한다.
    ```javascript
    // index.js
    const {User} = require('./models/User');

    app.post('/register', (req, res) => {
        const user = new User;
    })
    ```

5. 다운로드한 BodyParser도 불러온다.<br />`package.json` 파일에서 `"dependencies": { "body-parser": "^1.19.0",` 확인 가능하다.
    ```javascript
    // index.js
    const bodyParser = require('body-parser');
    const {User} = require('./models/User');

    app.post('/register', (req, res) => {
        const user = new User;
    })    
    ```

6. 생성한 `const bodyParser = require('body-parser');`에 옵션을 적용한다.<br />6-1. `app.use(bodyParser.urlencoded({extended: true}));` == `application/x-www-form-urlencoded` 이렇게 된 데이터를 분석해서 가져올 수 있게 해준다.<br />6-2. `app.use(bodyParser.json());` == `application/json` 데이터를 분석해서 가져온다.
    ```javascript
    // index.js
    const bodyParser = require('body-parser');
    const {User} = require('./models/User');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());    

    app.post('/register', (req, res) => {
        const user = new User;
    })  
    ```

7. 브라우저에서 기입한 데이터 정보들을 데이터 베이스에 넣기 위해 `req.body`를 써준다.<br />`req.body`에는 json 형태로 들어있다.
    ```javascript
    // index.js
    const bodyParser = require('body-parser');
    const {User} = require('./models/User');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());    

    app.post('/register', (req, res) => {
        const user = new User(req.body);
    })  
    ```
    
    - json 형태로 되어 있는 것은 bodyparser를 이용했기 때문이다.<br /><b>즉, bodyparser를 이용해서 req.body로 클라이언트에서 보낸 데이터 정보를 받아준다.</b>
    ```javascript
    // req.body는 json 형태
    {
        id : "hello",
        password: "1234"
    }
    ```

8. 인스턴스로 생성한 `user`를 이용해서 `save()` 한다. `.save()`는 몽고DB에서 오는 메서드이다.<br />해석하면, `req.body` 정보들이 `user` 모델에 `save`(저장)이 된다.
    ```javascript
    // index.js
    const bodyParser = require('body-parser');
    const {User} = require('./models/User');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());    

    app.post('/register', (req, res) => {
        const user = new User(req.body);
        user.save()
    })  
    ```

9. `save()`메서드에 콜백함수를 적용한다.<br />9-1. 만약 저장을 할 때 에러가 발생하면 클라이언트에게 에러가 있다고 전달한다.<br />전달할 땐 `res.json()`, json  형태로 전달하고 `success: false`와 함께 `err` 메세지도 함께 보낸다.<br />9-2. 저장이 성공할 경우, userInfo가 저장이 된다.<br />클라이언트에게 `res.status(200).json()`, 이것도 마찬가지로 json형태로 보낸다. *status(200) == 성공했다는 뜻
    ```javascript
    // index.js
    const bodyParser = require('body-parser');
    const {User} = require('./models/User');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());    

    app.post('/register', (req, res) => {
        const user = new User(req.body);
        
        user.save((err, userInfo) => {
            if (err) return res.json({ success: false, err})
            return res.status(200).json({
                success: true
            })
        });
    })  
    ```

10. 이렇게 작성을 하면 회원가입을 위한 라우터 코드 작성이 완료된다.
    ```javascript
    // index.js

    const bodyParser = require('body-parser');
    const {User} = require('./models/User');

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    app.post('/register', (req, res) => {
        const user = new User(req.body);
        
        user.save((err, userInfo) => {
            if (err) return res.json({ success: false, err})
            return res.status(200).json({
                success: true
            })
        });
    })
    ```

<br />

### 1.7.2. POST MAN을 이용해 회원가입
1. 로컬서버를 실행한다. `npm run start`<br />로컬서버 주소 `http://localhost:5000` 와 몽고DB가 연결된 것을 터미널 창에서 확인할 수 있다.
2. [POST MAN 사이트](https://web.postman.co/)에 접속한다. (구글 계정으로 로그인)
3. My Workspace에서 Request를 만든다.<br />3-1. "POST"를 선택하고 request URL를 입력한다.<br />3-2. `Body -> raw, JSON`을 선택한다.<br />
    ![1-7-3](./img/1-7-3.png)<br />
4. JSON을 선택 한 후, `models/User.js` 토대로 JSON을 작성한다.
    ```javascript
    // postman 사이트 - json 작성
    {
        "name": "leh",
        "email": "leh8767@gmall.com",
        "password": "1234567"
    }
    ```
5. **express 4.x버전부터는 express에 bodyParser가 내장된다.**<br />`bodyParser` → `express`로 변경.
    ```javascript
    // 이전
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    // 이후
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    ```
6. send 버튼을 클릭한다.(POST MAN 웹사이트에서 안 될 경우, 컴퓨터에서 앱을 다운받아 실행하면 된다.)<br />
    ![1-7-4](./img/1-7-4.png)<br />

<br />
<br />

## 1.8. Nodemon 설치
### 1.8.1. NODE MON이란?
- 원래는 node 서버를 킨 다음에 무언갈 수정하게 되면 node 서버를 내리고 다시 기동을 시켜야 반영이 되었는데,<br />NODE MON을 이용하게 되면 서버를 내리고 올리고 없이(키고 끄고 없이) 소스의 변화를 감지하여 반영을 시켜준다.
- **소스를 변경할 때 그걸 감지해서 자동으로 서버를 재 시작해주는 tool**

<br />

### 1.8.2. NODE MON 다운로드
1. `npm install nodemon --save-dev` 명령어를 터미널 창에서 실행한다.<br />(<b>"-dev"</b> 라고 적용한 부분은 로컬에서만 사용하겠다는 의미)
2. `package.json` 파일을 보면 `devDependencies`에 추가된 것을 확인할 수 있다.<br />
    ![1-8-1](./img/1-8-1.png)
3. NODE MON을 다운로드 한 후 시작할 때 node mon으로 시작하기 위해서 script를 하나 더 만들어야 하낟.
4. `package.json` 파일에 현재는 `"start":"node index.js"`로 되어 있어서 `npm run start` 명령어로 서버를 실행시켜준다.<br />이것을 참고하여 `NODE MON`을 시작해줄 명령어를 만든다. (`"backend"`는 원하는 단어로 적용하면 된다)
    ```javascript
    // package.json
    {
        "scripts": {
            "backend": "nodemon index.js"
        }
    }
    ```
5. 위와 같이 scripts를 적용했다면, NODE MON으로 서버를 실행시킨다.<br />`npm run backend`
6. <b>NODE MON으로 서버를 실행하게 되면 서버를 끄고 키지 않아도 수정했을 때, 새로고침(F5)을 하게되면 바로 반영이 된다.</b>

<br />
<br />

## 1.9. 비밀 설정 정보 관리
![1-9-1](./img/1-9-1.png)<br />

1. 소스코드에 개인정보 등 오픈하면 안되는 것들이 있을 때(`'mongodb+srv:` 코드에서 아이디와 비밀번호 예시)<br />`.gitignore`에 따로 표시하여 git에 올릴 때 올라가지 않게 한다.
2. 먼저, `config` 폴더를 하나 생성한다.
3. 새로 만든 `config` 폴더 안에 `dev.js` 파일을 하나 생성하고 아래 코드를 적용한다.<br />[`mongodb+srv`정보 참고](https://github.com/eunhye8767/__inflearn/tree/master/05_react_johnAhn/05_1_StarterClassBasic#13-%EB%AA%BD%EA%B3%A0-db-%EC%97%B0%EA%B2%B0)
    ```javascript
    module.exports = {
        mongoURI: 'mongodb+srv://leh:pcepys71317@boilerplate.0v2t3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
    }
    ```
4. 여기서 잠시 살펴볼 것이 있다.<br />개발을 할 때 2가지 환경에서 할 수 있는데 하나는 Local(development) 환경, 하나는 Deploy(배포)한 후 환경이다.<br />이 2가지의 환경을 따로 생각해야 한다.<br />
    ![1-9-2](./img/1-9-2.png)<br />
5. 왜냐면, development 모드일 때는 dev.js에 만든 변수를 가져올 수 있지만 Deploy(배포)한 이후에는 HEROKU 를 이용한다고 하면 해당 사이트에 mongodb 정보를 넣어줘야 한다.(HEROKU 사이트에서 관리)<br /><b>즉, 환경에 따라 분기 처리를 해줘야 한다.</b><br />
    ![1-9-3](./img/1-9-3.png)<br />
6. `config` 폴더 안에 `prod.js` 파일을 생성한다.<br />`dev.js === development 약자로, 로컬(개발)용`<br />`prod.js === production 약자로, 배포용`<br />`MONGO_URI`는 HEROKU 사이트에서 정한 키 그대로 적용해주면 된다.
    ```javascript
    // prods.js
    module.exports = {
        mongoURI: process.env.MONGO_URI
    }
    ```
    ![1-9-4](./img/1-9-4.png)<br />

7. `cofing` 폴더 안에 `key.js` 파일을 생성하고 아래와 같이 작성한다.<br />7-1. `process.env.NODE_ENV === ''` 에서 process.env.NODE_ENV은 환경변수를 뜻한다.<br />7-2. 로컬 환경이면 `process.env.NODE_ENV`의 값이 <b>development</b> 이고, 배포 후 환경이면 <b>production</b> 이다.
    ```javascript
    // key.js
    if(process.env.NODE_ENV === 'production') {
        module.exports = require('./prod');
    } else {
        module.exports = require('./dev');
    }
    ```

9. `index.js`에 적용된 `'mongodb+srv:~~` 영역을 수정해야 한다.<br />9-1. 먼저 `config` 변수를 만들어서 `.key.js` 파일을 불러온다.<br />9-2. `'mongodb+srv:~~`를 `config.mongoURI`로 대체한다.
    ```javascript
    // index.js
    // 9-1.
    const config = require('./config/key');

    // 9-2.
    mongoose.connect(config.mongURI)
      .then(()=> console.log('MongoDB Connected...'))
      .catch(err => console.log(err));
    ```
    ![1-9-5](./img/1-9-5.png)<br />

10. 마지막으로 git에 dev.js를 제외하고 올릴 땐, `.gitignore`에 `dev.js` 를 추가하면 된다.<br />`.gitignore`에 추가하고 git add를 한 후 확인해보면 `dev.js` 파일은 추가되지 않은 것을 확인할 수 있다.<br />
    ![1-9-6](./img/1-9-6.png)<br />

<br />
<br />

## 1.10. Bcrypt로 비밀번호 암호화 하기
1. 몽고DB 사이트에서 보면 POST MAN을 통해 회원가입한 정보를 확인할 수 있다.<br />
    ![1-10-1](./img/1-10-1.png)<br />
2. 몽고DB 사이트에서 보면 비밀번호가 그대로 노출이 된다. 즉 보안성이 약하다는 것
3. 보낼 때는 비밀번호를 그대로 보내도 데이터베이스에는 비밀번호가 암호화되서 보여지게 하려고 한다.
4. 비밀번호를 암호화해주기 위해 먼저 Bcrypt 라이브러리를 설치한다. [Bcrypt - npm사이트](https://www.npmjs.com/package/bcrypt)<br />터미널 창에서 `npm install bcrypt --save` 명령어를 실행한다.

<br />

### 1.10.1. Bcrypt로 비밀번호 암호화 하는 순서
1. 먼저, Register Route로 가기<br />1-1. `user.save()`를 하기 전에 암호화를 시켜줘야 한다.<br />
    ![1-10-2](./img/1-10-2.png)<br />

2. 먼제, `models > User.js` 파일에서 몽고스에 `pre()` 메서드를 사용한다.<br />`pre('save')` = `app.post('/register', (req, res) => {` 에서 `user.save()` user정보를 저장하기 전에 `userSchema.pre('save', function() { })`를 먼저 실행하겠다는 의미.
    ```javascript
    // User.js
    userSchema.pre('save', function( ) {
    })
    ```
3. `next` 파라미터를 주고 마지막에 `next()`로  `app.post('/register', (req, res) => { user.save()`로 보내주려고 한다.
    ```javascript
    // User.js
    userSchema.pre('save', function( next ) {

        next();
    })
    ```

4. 비밀번호를 암호화 시키기 위해 먼저 'bcrypt'를 가져온다. `const bcrypt = require('bcrypt');`
    ```javascript
    // User.js
    const bcrypt = require('bcrypt');

    userSchema.pre('save', function( next ) {

        // 비밀번호를 암호화 시킨다.

        next();
    })    
    ```

5. Bcrypt 가이드([사이트 바로가기](https://www.npmjs.com/package/bcrypt)) > Usage 부분을 참고하여 코드를 작성한다.<br />5-1. 가이드 사이트를 보면 Technique 1. salt를 먼저 생성하고 그 생성된 salt로 비밀번호를 암호화시킨다는 것.<br />5-2. 가이드 사이트, <b>async (recommended)</b> 영역을 보면 `saltRounds = 10`.<br />salt를 이용해서 비밀번호를 암호화해야하는데 그 전에 salt를 먼저 생성해야 한다. 또 saltrounds는 몇 글자인지를 나타내는 것이다.<br /><b>즉, salt를 만들 때 10자리인 salt를 만들어서 이 salt를 이용해서 비밀번호를 암호화한다는 뜻.</b><br />5-3. `saltRounds = 10` 변수를 만든다.<br />5-4. `var user = this;` = User.js 파일에서 `userSchema` 변수를 뜻한다. 그래서 `user.password`는 db에 저장된 비밀번호를 뜻한다.<br />5-5. 파라미터 `hash`는 암호화된 비밀번호를 뜻한다.
    ```javascript
    // User.js
    const bcrypt = require('bcrypt');

    // 5-3.
    const saltRounds = 10;

    userSchema.pre('save', function( next ) {
        var user = this;

        // 비밀번호를 암호화 시킨다.

        // 5-1.
        // .genSalt()으로 salt를 만든다.
        bcrypt.genSalt(saltRounds, function(err, salt) {

            if(err) return next(err);

            // salt를 제대로 생성했을 때
            // 첫파라미터 user.password는 암호화되기전의 비밀번호
            bcrypt.hash(user.password, salt, function(err, hash) {
                if(err) return next(err);
                // 암호화된 비밀번호 hash를 db에 저장된 user.password에 교체.
                user.password = hash;
                next();
            });
        });
    })    
    ```

6. 비밀번호를 변경했을 때에만 암호화 시켜주기 위해 조건을 적용한다.<br />(조건을 적용하지 않으면 이메일 등 다른 정보를 변경할때에도 암호화 작업이 되기 때문에)
    ```javascript
    // User.js
    const bcrypt = require('bcrypt');
    const saltRounds = 10;

    userSchema.pre('save', function( next ) {
        var user = this;

        // user에서 password 정보가 변경되었을 때
        if(user.isModified('password')) {
            // 비밀번호를 암호화 시킨다.
            bcrypt.genSalt(saltRounds, function(err, salt) {
                if(err) return next(err);
        
                bcrypt.hash(user.password, salt, function(err, hash) {
                    if(err) return next(err);
                    user.password = hash;
                    next();
                });
            });
        } else {
            // password 정보가 변경되지 않았을 때
            next();
        }

    })  
    ```

7. 이렇게 코드를 작성한 후, POST MAN에서 회원가입을 진행한다. 회원가입을 진행하기 전에 서버를 먼저 실행한다.
8. POST MAN에서 회원가입 후 몽고DB에서 확인해보면 비밀번호부분이 암호화된 것을 확인할 수 있다.<br />
    ![1-10-3](./img/1-10-3.png)<br />

<br />
<br />

## 1.11. 로그인 기능 with Bcrypt
1. 로그인 기능을 만들기 위해선 login route가 필요하다.
    ```javascript
    // index.js
    app.post('/login', (req, res) => {
        
    })
    ``
2. login route에 3가지 작업이 필요하다.<br />2-1. 데이터베이스에서 요청한 E-mail 찾기 <br />2-2. 데이터 베이스에서 요청한 E-mail이 있다면 비밀번호가 같은 지 확인<br />2-3. 비밀번호까지 같다면 Token을 생성
    ```javascript
    // index.js
    app.post('/login', (req, res) => {
        // 요청된 이메일을 데이터 베이스에서 있는 지 찾는다.

        // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.

        // 비밀번호까지 맞다면 토큰을 생성하기.
    })
    ```
    ![1-11-1](./img/1-11-1.png)<br />

3. 데이터베이스에서 요청한 E-mail 찾기<br />3-1. `user`에는 이름, 이메일, 비밀번호 등 유저에 대한 정보가 담겨있다.<br />3-2. User 모델을 가져온 다음, 몽고db에서 지원하는 `findOne()`메소드를 이용하여 찾는다.<br />3-3. 찾고자 하는 이메일을 `findOne({ })` 안에 기재한다.<br />3-4. User에 요청한 이메일을 가진 user가 없다면 `if(!user{}){}` 값을 json 데이터로 `return`한다.
    ```javascript
    // index.js
    app.post('/login', (req, res) => {

        // 요청된 이메일을 데이터 베이스에서 있는 지 찾는다.
        User.findOne({ email: req.body.email }, (err, user) => {
            if(!user) {
                return res.json({
                    loginSuccess: false,
                    message: '제공된 이메일에 해당하는 유저가 없습니다.'
                })
            }
        })

        // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.

        // 비밀번호까지 맞다면 토큰을 생성하기.
    })    
    ```
4. 데이터 베이스에서 요청한 E-mail이 있다면 비밀번호가 같은 지 확인<br />4-1. `comparePassword('요청할 때 주는 패스워드', 콜백함수)` 메서드를 만들고 아규먼트 2개를 적용해주려고 한다.<br />4-2. `comparePassword(req.body.password, (err, isMatch) => {})` == 비밀번호를 비교를 해서 브라우저에서 친 비밀번호와 데이터베이스에 있는 비밀번호가 맞다면 "isMatch로 맞다" 를 가져오려고 한다.<br />4-3. `comparePassword()` 메소드는 User.js 파일에서 만들어준다. `userSchema.methods.comparePassword = function(plainPassword, cb) {};`.<br />(comparePassword 이름은 임의로 작성해도 된다. 단, comparePassword 이름을 변경할 경우 index.js 에서도 이름을 동일하게 변경해주면 된다.)<br />해당 메서드를 사용할 때 아규먼트를 2개 주었기 때문에 동일하게 만들어줘야 한다. === `comparePassword('요청할 때 주는 패스워드', 콜백함수)`
    ```javascript
    // index.js
    app.post('/login', (req, res) => {

        // 요청된 이메일을 데이터 베이스에서 있는 지 찾는다.
        User.findOne({ email: req.body.email }, (err, user) => {
            if(!user) {
                return res.json({
                    loginSuccess: false,
                    message: '제공된 이메일에 해당하는 유저가 없습니다.'
                })
            }
        
            // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
            user.comparePassword(req.body.password, (err, ismatch) => {

            })

            // 비밀번호까지 맞다면 토큰을 생성하기.
        })

    })    
    
    // User.js
    userSchema.methods.comparePassword = function(plainPassword, cb) {
    };
    ```
5. 비밀번호를 비교할 때, plainPassword(브라우저에 기입한 비밀번호)와 데이터베이스에 암호화로 저장된 비밀번호가 있다.<br />이 2개를 같은 지 체크해야 하는데 plainPassword도 암호화 한 후에 데이터베이스에 암호화로 저장된 비밀번호와 비교해야 한다. 왜냐하면 암호화된 비밀번호를 복구화할 수 없기 때문이다.<br />그래서, <b>plainPassword를 암호화 시키는데 이 때 `compare()` 메서드를 이용한다.</b>
    ```javascript
    // User.js
    userSchema.methods.comparePassword = function(plainPassword, cb) {

        // plainPassword 비밀번호를 암호화 하여
        // 현재 데이터베이스에 저장된 this.password 비밀번호화 비교
        bcrypt.compare(plainPassword, this.password, function(err, isMath) {
            // 비교했을 때 다르면 err, 
            if(err) return cb(err),
                // 같으면 err는 null, isMatch === true 
                cb(null, isMatch)
        });
    };
    ```

6. User.js에서 생성한 `comparePassword()` 메서드 실행 후, 결과에 따라 index.js에 실행된다.<br />비밀번호가 틀렸을 때 json 형태로 false 값과 함께 에러 메세지가 반환된다.
    ```javascript
    // index.js
    app.post('/login', (req, res) => {

        // 요청된 이메일을 데이터 베이스에서 있는 지 찾는다.
        User.findOne({ email: req.body.email }, (err, user) => {
            if(!user) {
                return res.json({
                    loginSuccess: false,
                    message: '제공된 이메일에 해당하는 유저가 없습니다.'
                })
            }

            // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
            user.comparePassword(req.body.password, (err, ismatch) => {
                // 비밀번호가 틀렸을 때
                if(!isMatch)
                    return res.json({
                        loginSuccess: false,
                        message: '비밀번호가 틀렸습니다.'
                })
                
                // 비밀번호까지 맞다면 토큰을 생성하기.
            })
        })


    })    
    ```

7. 비밀번호까지 같다면 Token을 생성<br />7-1. `generateToken((err, user) => {})` 메서드를 생성하고 콜백함수를 넣어준다.
    ```javascript
    // index.js
    app.post('/login', (req, res) => {

        // 요청된 이메일을 데이터 베이스에서 있는 지 찾는다.
        User.findOne({ email: req.body.email }, (err, user) => {
            if(!user) {
                return res.json({
                    loginSuccess: false,
                    message: '제공된 이메일에 해당하는 유저가 없습니다.'
                })
            }

            // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
            user.comparePassword(req.body.password, (err, ismatch) => {
                // 비밀번호가 틀렸을 때
                if(!isMatch)
                    return res.json({
                        loginSuccess: false,
                        message: '비밀번호가 틀렸습니다.'
                })
                
                // 비밀번호까지 맞다면 토큰을 생성하기.
                user.generateToken((err, user) => {

                })
            })
        })


    })    
    ```

<br />
<br />

## 1.12. 토큰 생성 with jsonwebtoken
1. 비밀번호 까지 맞다면 유저를 위한 토큰을 생성한다.<br />
    ![1-12-1](./img/1-12-1.png)<br />

2. 토큰 생성을 위해 `JSONWEBTOKEN` 라이브러리를 다운로드 한다. 터미널 창에 `npm install jsonwebtoken --save` 명령어를 실행한다.

3. `jsonwebtoken`을 사용하기 위해 [NPMJS 사이트를 참조한다.](https://www.npmjs.com/package/jsonwebtoken#usage)<br />
    ![1-12-2](./img/1-12-2.png)<br />

4. `generateToken()` 메서드를 Uses.js 파일에서 생성한다.<br />generateToken()메서드 경우 콜백함수만 적용했기 때문에 cb 하나만 써준다. (index.js에서 generateToken() 참고)
    ```javascript
    // User.js
    userSchema.methods.generateToken = function(cb) {
        // jsonwebtoken을 이용해서 token을 생성하기
    }
    ```

5. User.js에서 `const jwt = require('jsonwebtoken');` 변수를 생성하여 jsonwebtoken을 가져온다.
6. `sign()`을 이용해서 token을 생성한다.<br />`user._id` + `secreatToken` = token<br />나중에 token 해석을 할 때, `secreatToken`을 통해 `user._id`(유저의 아이디)를 얻을 수 있다. 즉 누구인지 확인할 수 있다.
    ```javascript
    // User.js
    userSchema.methods.generateToken = function(cb) {
        var user = this;

        // jsonwebtoken을 이용해서 token을 생성하기
        var token = jwt.sign(user._id.toHexString(), 'secreatToken');
    }
    ```

7. 생성한 `var token`을 `userSchema.token`에 넣어준다. 그리고 저장(`save()`)을 한다.
    ```javascript
    // User.js
    userSchema.methods.generateToken = function(cb) {
        var user = this;

        // jsonwebtoken을 이용해서 token을 생성하기
        var token = jwt.sign(user._id.toHexString(), 'secreatToken');

        user.token = token;
        user.save(function(err, user){
            if(err) return cb(er);
            cb(null, user);
        })
    }
    ```

8. User.js에서 `userSchema.methods.generateToken = function(cb) {}` 메서드가 실행이 되면 결과값에 따라 index.js - `generateToken()`가 실행이 된다.<br />8-1. 토큰을 쿠키에 저장한다. 그 전에 `npm install cookie-parser --save` 명령어를 실행하여 쿠키 라이브러리를 설치한다.<br />8-2. 설치가 완료되면 `const cookieParser = require('cookie-parser')` cookie-parser를 불러온다.<br />8-3. 불러온 cookie-parser를 적용한다. `app.use(cookieParser());`<br />8-4. `res.cookie("x_auth", user.token)`을 적용하면 개발자모드, 쿠키에서 x_auth(key) : token(value)로 저장이 된다.
   ```javascript
    // index.js
    const cookieParser = require('cookie-parser');
    
    app.use(cookieParser());

    app.post('/login', (req, res) => {

        // 요청된 이메일을 데이터 베이스에서 있는 지 찾는다.
        User.findOne({ email: req.body.email }, (err, user) => {
            if(!user) {
                return res.json({
                    loginSuccess: false,
                    message: '제공된 이메일에 해당하는 유저가 없습니다.'
                })
            }

            // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호 인지 확인.
            user.comparePassword(req.body.password, (err, ismatch) => {
                // 비밀번호가 틀렸을 때
                if(!isMatch)
                    return res.json({
                        loginSuccess: false,
                        message: '비밀번호가 틀렸습니다.'
                })
                
                // 비밀번호까지 맞다면 토큰을 생성하기.
                user.generateToken((err, user) => {
                    if(err) return res.status(400).send(err);

                    // 토큰을 저장한다. 
                    // 토큰의 경우 로컬스토리지, 쿠키 등에 저장이 되지만 본 수업에서는 쿠키에 저장한다.
                    res.cookie("x_auth", user.token)
                        .status(200)
                        .json({ loginSuccess: true, userId: user._id })
                })
            })
        })
    })    
    ```
    ![1-12-3](./img/1-12-3.png)<br />

<br />

### 1.12.1. 로그인 테스트 해보기
1. 몽고DB에 저장된 정보로 로그인 테스트 해보기<br />저장되어 있는 유저 정보의 비밀번호는 모두 1234567 이다.<br />
    ![1-12-4](./img/1-12-4.png)<br />

2. `npm run start`로 서버를 킨다.

3. POST MAN에서 또 하나의 Request를 만든다. 다 작성했으면 `SEND`를 클릭한다.<br />
    ![1-12-5](./img/1-12-5.png)<br />

<br />
<br />

## 1.13. Auth 기능 만들기
### 1.13.1. Auth Route 만들기
![1-13-1](./img/1-13-1.png)<br />

1. auth 기능이 필요한 이유? 로그인한 유저, 관리자 등을 체크해야할 때 필요한 auth 기능
2. 먼저, Auth Route를 만든다.<br />auth의 경우, 미들웨어 `auth`를 추가한다.
    - **미들웨어(middleware)**는 양 쪽을 연결하여 데이터를 주고 받을 수 있도록 중간에서 매개 역할을 하는 소프트웨어, 네트워크를 통해서 연결된 여러 개의 컴퓨터에 있는 많은 프로세스들에게 어떤 서비스를 사용할 수 있도록 연결해 주는 소프트웨어를 말한다. 3계층 클라이언트/서버 구조에서 미들웨어가 존재한다. 웹 브라우저에서 데이터베이스로부터 데이터를 저장하거나 읽어올 수 있게 중간에 미들웨어가 존재하게 된다.
    ```javascript
    // index.js
    app.get('/api/users/auth', auth, (req, res) => {

    })
    ```
3. 미들웨어를 사용하기 전, 프로젝트 루트폴더에 `middleware` 폴더를 생성하고 `auth.js` 파일을 생성한다.<br />(`auth.js` 파일에서 유저 관련 인증처리를 할 예정이다.)
    ```javascript
    // auth.js
    let auth = (req, res, next) => {
        // 인증 처리를 하는 곳
    }

    module.exports = { auth }
    ```

4. `middleware/auth.js` 파일을 만들었다면 `index.js`에서 불러온다.
    ```javascript
    // index.js
    const {auth} = require('./middleware/auth');
    
    app.get('/api/users/auth', auth, (req, res) => {

    })
    ```

5. `middleware/auth.js`에서 인증 처리하는 순서<br />
    ![1-13-3](./img/1-13-3.png)<br />
    ```javascript
    // auth.js
    let auth = (req, res, next) => {
        // 인증 처리를 하는 곳
        // 1. 클라이언트 쿠키에서 토큰을 가져온다.
        // 2. 토큰을 복호화 한 후 유저를 찾는다.
        // 3-1. 유저가 있으면 인증 Okay
        // 3-2. 유저가 없으면 인증 No
    }

    module.exports = { auth }
    ```
    <b>* 복호화(decryption)</b>는 암호화된 데이터를 암호화되기 전의 형태로 바꾸는 처리를 말한다. 복호화는 암호화(encryption, 인크립션)의 반대말로서 영어로 decryption(디크립션)이라고 부른다. 복호화는 디코딩(decoding)과 유사하다.

6. <b>[인증처리 1.] 클라이언트 쿠키에서 토큰을 가져온다.</b><br />`cookie-parser`를 이용한다.<br />`index.js`에서 쿠키에 토큰을 저장할 때 `res.cookie("x_auth", user.token)` => "x_auth"로 저장하였기 때문에 "x_auth"으로 가져온다.
    ```javascript
    // auth.js
    let auth = (req, res, next) => {
        // 인증 처리를 하는 곳
        // 1. 클라이언트 쿠키에서 토큰을 가져온다.
        let token = req.cookies.x_auth;

        // 2. 토큰을 복호화 한 후 유저를 찾는다.
        // 3-1. 유저가 있으면 인증 Okay
        // 3-2. 유저가 없으면 인증 No
    }

    module.exports = { auth }
    ```

7. <b>[인증처리 2.] 토큰을 복호화 한 후 유저를 찾는다.</b><br /><b>2-1.</b> 토큰 복호화는 User 모델에서 메서드를 생성하여 작업한다.<br /><b>2-2.</b> User 모델이 없기 때문에 먼저 User 모델을 불러온다. `const { User } = require('../models/User')`<br /><b>2-3.</b> `User.findByToken();` == `findByToken` 메서드를 만들어 적용하고, User 모델에 해당 메서드를 생성한다. `userSchema.statics.findByToken();`<br />
    ```javascript
    // auth.js
    const { User } = require('../models/User');

    let auth = (req, res, next) => {
        // 인증 처리를 하는 곳
        // 1. 클라이언트 쿠키에서 토큰을 가져온다.
        let token = req.cookies.x_auth;

        // 2. 토큰을 복호화 한 후 유저를 찾는다.
        User.findByToken();

        // 3-1. 유저가 있으면 인증 Okay
        // 3-2. 유저가 없으면 인증 No
    }

    module.exports = { auth }

    // User.js
    userSchema.statics.findByToken();
    ```
    <br />

    <b>※ Tip. schema.methos랑 schema.statics의 차이?</b>
    메소드(methos)는 객체의 인스턴스를 만들어야만 사용이 가능하지만<br />스태틱(statics)은 객체의 인스턴스를 만들지 않아도 사용이 가능하다.<br /><br />코드를 보면 `const temp = new User()` 이런식으로 선언하고난 뒤<br />`temp.(메소드)` 이런식으로 호출해야만 쓸 수 있는 것이 메소드.<br />`User.(스태틱)` 이런식으로 호출할 수 있는 것이 스태틱.<br /><br />스태틱은 temp.(스태틱)을 형태로도 호출이 가능하다. 그러면 무조건 스태틱으로 선언해야 하는 것 아니냐는 질문을 할 수 있는데, 그건 아니고 <b>둘을 구분짓는 건 오용을 막기위함이 아닐까 싶다</b><br /><br />인스턴스가 존재해야만 기능이 원할하게 지원되는 함수인데 스태틱으로 만들어서 프로그래머의 실수로 호출을 해서 발생되는 에러를 미연에 방지하는 것.<br />스태틱은 인스턴스와 무관하게 공용적으로 자주 쓰이는 함수가 필요할 때 쓰이는 것 같다.
    <br /><br />

    <b>2-4.</b> `User.js`에서 `findByToken()` 메서드 코드를 작성한다.<br />([jsonwebtoken - NPMJS 사이트](https://www.npmjs.com/package/jsonwebtoken#usage)에서 'verify' 검색하여 가이드 참고)
    ```javascript
    // User.js
    userSchema.statics.findByToken = function(token, cb) {
        var user = this;

        // 토큰을 decode 한다.
        //   decode할 때에는 verify()를 사용한다.
        //   user._id + 'secreatToken' = token
        //   decoded == user._id
        jwt.verify(token, 'secreatToken', function(err, decoded) {
            // 유저 아이디를 이용해서 유저를 찾은 다음에
            // 클라이언트에서 가져온 token과 DB에 보관된 token이 일치하는 지 확인
            // findOne == 몽고DB 메서드. 어떤 것을 찾을 건지?
            user.findOne({ "_id" : decoded, "token" : token}, function(err, user) {
                if(err) return cb(err);
                cb(null, user);
            })
        })
    };
    ```
    ![1-13-4](./img/1-13-4.png)<br />

    <br />

    <b>2-5.</b> `auth.js`에서 `User.findByToken();` 코드를 작성한다.
    ```javascript
    // auth.js
    const { User } = require('../models/User');

    let auth = (req, res, next) => {
        // 인증 처리를 하는 곳
        // 1. 클라이언트 쿠키에서 토큰을 가져온다.
        let token = req.cookies.x_auth;

        // 2. 토큰을 복호화 한 후 유저를 찾는다.
        User.findByToken(token, (err, user) => {
            if (err) throw err;
            if (!user) return res.json({ isAuth: false, error: true })

            // req.token, req.user로 해줘야 
            // index.js 등에서 해당 정보에 접근할 수 있음.
            req.token = token;
            req.user = user;

            // 미들웨어 이후 단계로 이동하기 위해 next 적용
            next();
        });

        // 3-1. 유저가 있으면 인증 Okay
        // 3-2. 유저가 없으면 인증 No
    }

    module.exports = { auth }
    ```

    <br />

    <b>※ Tip. try, catch, throw</b><br />
    - <b>try 내부의 코드가 실행되다가 오류 나면 catch로 이동</b><br />=> 에러가 나도 코드가 <b>강제 종료되지 않는다.</b>
    - <b>catch(error)의 error</b> :  에러 정보를 갖고 있는 객체
    ```javascript
    try {
        //  잘 실행되다가
        //  에러난 코드 이후로는 실행이 안된다.
        //  로그로 확인 가능
    } catch (error) {
        alert(`에러 내용: ${error.name}: ${error.message}`);
    }
    ```
    <br />

    - <b>throw는 사용자 지정 오류</b> : 특정 상황의 오류일 경우 catch로 던져 에러를 처리한다.
    ```javascript
    try{ 
        if(x>10) {
            throw "high";
        } else if(x<0){
            throw "low";
        }
    }
    
    catch(err){
        if(err == "high"){
            document.write("111111111");
        }
        if(err == "low"){
            document.write("22222222222");
        }
    }    
    ```

    <br />
    <br />

    <b>2-6.</b> 미들웨어 auth를 통과해 true가 되면 `index.js`에서 클라이언트에게 정보를 전달해주면 된다.
    ```javascript
    // index.js
    const {auth} = require('./middleware/auth');
    
    app.get('/api/users/auth', auth, (req, res) => {
        // 여기까지 미들웨어(auth)를 통과해왔다는 애기는 Authentication이 True라는 말.
        res.status(200).json({
            _id : req.user._id,
            // 정책이 role = 0 이면 알반유저, 0이 아니면 관리자.
            isAdmin: req.user.role === 0 ? false : true,
            isAuth: true,
            email: req.user.email,
            name: req.user.name,
            lastname: req.user.lastname,
            role: req.user.role,
            image: req.user.image
        })
    })
    ```

<br />
<br />

## 1.14. 로그아웃 기능
![1-14-1](./img/1-14-1.png)<br />

1. 로그아웃 Route를 만든다.<br />`findOneAndUpdate` 메서드는 유저를 찾아서 <b>업데이트 시켜</b>달라는 의미이다.
    ```javascript
    // index.js
    app.get('/api/users/logout', auth, (req, res) => {
        User.findOneAndUpdate({ _id: req.user._id, }, { token: "" }, (err, user) => {
            if (err) return res.json({ success: false, err});
            return res.status(200).send({ success: true })
        } )
    })
    ```

2. 로그아웃 Route까지 만든 후, 테스트를 해본다.<br /><b>2-1.</b> 먼저, 터미널에서 `npm run start` 명령어로 서버를 킨다.<br /><b>2-2.</b> POST MAN에서 로그인을 한다.<br />
    ![1-14-2](./img/1-14-2.png)<br />
    <br />

    <b>2-3.</b> 로그인을 했으면 로그아웃을 해본다.<br />
    ![1-14-3](./img/1-14-3.png)<br />
    <br />

    <b>2-4.</b> 몽고DB 사이트에서도 `token`이 사라진 것을 확인할 수 있다.<br />
    ![1-14-4](./img/1-14-4.png)<br />

<br />
<hr />
<br />

# 2. React JS
## 2.1. 리액트란?
![2-1-1](./img/2-1-1.png)<br />

1. React(리액트)는 Library(라이브러리) 이다.
2. Components : module과 비슷하게 컴포넌트로 이뤄져 있어서 reusable이 뛰어남(재사용성 ↑)
3. Virtual DOM

<br />

### 2.1.1. Virtual DOM?
1. <b>Real DOM VS Virtual DOM</b>
    - <b>Real DOM</b><br />1-1. 만약 10개의 리스트가 있다.<br />1-2. 그 중에 한 가지 리스트만 Update 된다.<br />1-3. 전체 리스트를 다시 Reload 해야 됨.<br />1-4. Super Expensive한 작업
    - <b>Virtual DOM</b><br />1-1. 만약 10개의 리스트가 있다.<br />1-2. 그 중에 한 가지 리스트만 Update 된다.<br />1-3. 그 바뀐 한 가지 아이템만 DOM에서 바꿔준다.(스피드↑ 부하↓)
2. Virtual DOM은 Real DOM과 같은 properties들을 갖고 있으며 그냥 가볍게 Real DOM을 Copy한거라 보면 된다.
3. Virtual DOM은 어떻게? 업데이트 된 것만 바꿔주는 걸까?<br />3-1. JSX를 렌더링 한다. 그러면 Virtual DOM이 Update가 됨<br />3-2. Virtual DOM이 이전 Virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분을 찾는다.<br />3-3. Virtual DOM이 이전 Virtual DOM에서 찍어둔 Snapshot과 비교를 해서 바뀐 부분을 찾는다. 이 과정을 `diffing` 이라고 부름.<br />3-4. 그 바뀐 부분만 Real DOM에서 바꿔준다.

<br />
<br />

## 2.2. Create-React-App
### 2.2.1. Create React App으로 리액트 시작하기
1. 원래 리액트 앱을 처음 실행하기 위해선 webpack 이나 babel 같은 것을 설정하기 위해서 엄청 나게 많은 시간이 걸렸다. 하지만 이제는 `create-react-app Command`로 바로 시작할 수 있다.
    - <b>babel</b> : 최신 자바스크립트 문법을 지원하지 않는 브라우저들을 위해서 최신 자바스크립트 문법을 구형 브라우저에서도 돌수 있게 변환 시켜줌.
    - <b>Webpack</b> : 웹팩은 오픈 소스 자바스크립트 모듈 번들러로써 여러개로 나누어져 있는 파일들을 하나의 자바스크립트 코드로 압축하고 최적화하는 라이브러리.
2. 터미널에서 해당 프로젝트 로컬폴더 기준, `npx create-react-app .` 명령어를 실행하여 리액트를 설치한다.
    - 원래 `create-react-app`을 할 때 `npm install -g create-react-app` 이렇게 했었다. global 디렉토리에 다운받음.(=window에 설치)<br />→ 이제는 `npx`를 이용하여 다운 받지 않고 사용 가능하다.
    - npx이 NPM(Node package manager) registry에서 create-react-app을 찾아서(look up) 다운로드 없이 실행 시켜준다!<br />-- ADVANTAGES to use NPX --><br />1. Disk Space를 낭비하지 않을 수 있다.(프로젝트에만 설치하기 때문에 공간절약)<br />2. 항상 최신 버전을 사용할 수 있다.

<br />
<br />

## 2.3. 구조 설명
1. `npm run start`로 리액트 프로젝트 서버를 실행한다.<br />(`package.json`에서 "scripts"에 start로 정해져 있기 때문에 npm run start로 실행하는 것)
    ![2-3-1](./img/2-3-1.png)<br />

2. 'Webpack' 에서는 src 폴더 안에 있는 파일들만 관리를 한다. 이미지 등을 적용해야 할 땐 'src' 폴더에 적용하면 된다.<br />(public은 관리하지 않음)<br />
    ![2-3-2](./img/2-3-2.png)<br />
    <br />

**※ Tip. Create React App 구조(Structure)** : [Folder Structure 참조보기](https://create-react-app.dev/docs/folder-structure/)

<br />
<br />

## 2.4. CRA to Our Boilerplate
- 처음 리액트를 설치했을 때 구조<br />
    ![2-4-2](./img/2-4-2.png)<br />
    <br />

- boiler-plate에 특성화된 구조 설명<br />
    ![2-4-1](./img/2-4-1.png)<br />
    <br />

    - Auth(HOC) : ex) Auth 페이지에서 관리자인지? 아닌지? 체크해서 해당 페이지로 이동시킴.<br />
    ![2-4-1](./img/2-4-3.png)<br />
    <br />

    - vscode 확장 프로그램에서 "ES7 React/Redux/GraphQL/React-Native snippets" 설치,<br />`rfce`를 클릭하면 <b>default function component 자동 생성된다.</b><br />- rce : class componet 생성<br />- rafce : allow function component 생성<br />- rfce : function component 생성


<br />
<br />

## 2.5. React Router DOM
1. 페이지 이동을 할 때 `React Router DOM`이라는 것을 사용한다.<br />[어떻게 사용하는 지 웹사이트 참조](https://v5.reactrouter.com/web/example/basic)
2. 해당 프로젝트 루트 기준, 터미널에서 `npm install react-router-dom` 명령어를 실행한다.
3. [참조사이트](https://v5.reactrouter.com/web/example/basic) 참고하여 `App.js` 에 적용한다.
    ```javascript
    // App.js
    import React from "react";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

    import LandingPage from "./components/views/LandingPage/LandingPage";
    import LoginPage from "./components/views/LoginPage/LoginPage";
    import RegisterPage from "./components/views/RegisterPage/RegisterPage";

    function App() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route exact path="/" element={<LandingPage />} />
                        <Route exact path="/login" element={<LoginPage />} />
                        <Route exact path="/register" element={<RegisterPage />} />
                    </Routes>
                </div>
            </Router>
        );
    }

    export default App;
    ```
    - **exact** : **정확히 일치**할 때만 보여주고 싶을 때.
    - react-router-dom이 버전 6로 업그레이드되면서, Switch를 더이상 지원을 안하게 됬다. **Switch -> routes로 바뀜. 또한 component도 element로 바꼈다.**<br />[공식문서 참조](https://reactrouter.com/docs/en/v6/upgrading/v5)

    <br />
    <br />

## 2.6. 데이터 Flow & Axios
### 2.6.1. Data Request, Response Flow 그리고 Axios
![2-6-1](./img/2-6-1.png)<br />

1. 터미널 창에서 `npm install axios` 명령어를 실행하여 axios를 설치한다.
2. axios 를 사용해서 Request를 보내면 에러가 생긴다. (서버 포트 : 5000 / 클라이언트 포트 : 3000)

<br />
<br />

## 2.7. CORS 이슈, Proxy 설정
### 2.7.1. CORS 이슈
1. **axios를 사용해 Request시, 에러가 생기는 이유 :**<br />서버는 포트가 5000번, 클라이언트 포트는 3000번이다. 이 2개가 서로 다른 포트를 가지고 있어서 **설정없이 Request를 보낼 수 없다.**<br />그 이유는 Cros정책 때문이다. (CORS(Cross-Origin Resource Sharing) 보안을 위해서)<br />
    ![2-7-1](./img/2-7-1.png)<br />

2. CORS 보안을 해결하는 방법 중 Proxy 사용방법으로 해결하기<br />[react, Proxy 가이드 참조](https://create-react-app.dev/docs/proxying-api-requests-in-development/#configuring-the-proxy-manually)
    ![2-7-2](./img/2-7-2.png)<br />

<br />

### 2.7.2. Proxy 설정
1. 해당 프로젝트 루트 기준, 터미널창에서 `npm install http-proxy-middleware --save` 명령어를 실행하여 proxy를 설치한다.
2. `src/setupProxy.js` 파일을 생성하고 참조 사이트에 있는 코드를 붙여넣기 한다.<br />server를 생성할 때 local port를 5000번으로 했기 때문에 동일하게 적용한다.
    ```javascript
    // setupProxy.js
    const { createProxyMiddleware } = require('http-proxy-middleware');

    module.exports = function(app) {
        app.use(
            '/api',
            createProxyMiddleware({
                target: 'http://localhost:5000',
                changeOrigin: true,
            })
        );
    };
    ```
    ![2-7-3](./img/2-7-3.png)<br />
    ![2-7-4](./img/2-7-4.png)<br />
3. `axios` 테스트<br />서버와 클라이언트 모두 켜준 후 확인한다.
    - server
        ```javascript
        // index.js
        app.get('/api/hello', (req, res) => res.send("안녕하세요 ~"))
        ```
    - client
        ```javascript
        // LandingPage.js
        import React from 'react';
        import axios from 'axios';

        function LandingPage() {
            useEffect(() => {
                axios.get('/api/hello')
                    .then(response => console.log(response.data))
            }, [])
            return (
                <div>
                    LandingPage
                </div>
            )
        }

        export default LandingPage

        ```
        ![2-7-5](./img/2-7-5.png)<br />

<br />
<br />

## 2.8. Proxy Server
![2-8-1](./img/2-8-1.png)<br />

### 2.8.1. Proxy Server 사용 이유
1. 회사에서 직원들이나 집 안에서 아이들 인터넷 사용 제어
2. 캐쉬를 이용해 더 빠른 인터넷 이용 제공
3. 더 나은 보안 제공
4. 이용 제한된 사이트 접근 가능

<br />
<br />

## 2.9. Concurrently
- **Concurrently** : 여러 개의 commands를 동시에 작동 시킬 수 있게 해주는 Tool.
- Concurrentl를 이용해서 프론트, 백 서버 한 번에 켜키

<br />

## 2.9.1. Concurrently 사용법
1. client와 server를 감싸는 폴더를 기준으로 터미널 창에서 `npm install concurrently --save` 명령어를 실행하여 설치한다.
2. `package.json` 파일에서 `"start": "concurrently \"켜야하는 것1\" \"켜야하는 것2\""` 를 적용한다.
    - `--prefix 폴더명` == 서버를 실행해야하는 `package.json`이 있는 폴더명을 기재해주면 된다.
    ```javascript
    // package.json
    {
        "dependencies": {
            "concurrently": "^6.4.0"
        },
        "scripts": {
            "dev": "concurrently \"npm run backend --prefix server\" \"npm run start --prefix client\""
        }
    }
    ```
3. 위와 같이 적용 후, `npm run dev`를 실행하게 되면 백 -> 프론트 서버 순으로 실행이 된다.<br />
    ![2-9-1](./img/2-9-1.png)<br />

<br />
<br />

## 2.10. Antd CSS Framwork
1. CSS FRAMEWORK 종류 for React JS<br />
    - Material UI
    - React Bootstrap
    - Semantic UI
    - [Ant Design](https://ant.design/) (사용)
    - Materialize 등등...
2. 해당 프로젝트 루트 기준, `npm install antd` 명령어를 실행하여 CSS Framwork를 설치한다.
3. Ant Design 경우, [해당 사이트 가이드](https://ant.design/docs/react/introduce#Usage)를 참고한다.

<br />
<br />

## 2.11. Redux 기초
<b>What is Redux? :</b><br />Redux is a predictable state container for JavaScript apps.<br />상태 관리 라이브러리
<br />

### 2.11.1. Props VS State
![2-11-1](./img/2-11-1.png)<br />

#### Props
1. properties의 줄임말.
2. 컴포넌트 끼리 자료 등을 줄 때 props를 이용한다.
3. Props는 부모 컴포넌트 -> 자식 컴포넌트(위에서 아래 방향)으로만 보낼 수 있다.
4. 부모 컴포넌트가 props로 자식컴포넌트에 '1' 이라는 데이터를 내려주면 자식컴포넌트에서  '1'의 값을 변경할 수 없다.<br />값을 변경하려면 부모컴포넌트에서 다시 자식컴포넌트로 값을 변경하여 보내줘야 한다.

<br />

#### State
1. State is mutable = 해당 컴포넌트 안에서 변경이 가능하다 (props처럼 부모->자식 컴포넌트로 전달할 필요가 없다)

<br />

#### Redux는 State를 관리하는 Tool 이라고 생각하면 된다.
![2-11-2](./img/2-11-2.png)<br />

- Redux를 사용하게 되면, 상위 컴포넌트를 타고 타고 올라가서 관리할 필요 없이 store에서 바로 관리하게 된다.

<br />

### 2.11.2. Redux 데이터 Flow(strict unidirectional data flow)
![2-11-3](./img/2-11-3.png)<br />

- Redux 데이터는 한 방향으로만 흐른다.
- **Action : 객체**로 되어 있고, 무엇이 일어났는 지 설명하는 객체.
- Reducer : 액션을 함으로 인해서 변해진 state를 return.
    ![2-11-4](./img/2-11-4.png)<br />
- Store : State를 감싸주는 역활. Store안에는 여러가지 메서드들이 있는데, 그 메서드로 state를 관리.

<br />
<br />

## 2.12. Redux UP
### 2.12.1. Redux - Dependency 다운로드
1. Redux 사용에 앞서 Dependency를 다운로드 한다.
    - redux
    - react-redux
    - redux-promise (미들웨어)
    - redux-thunk (미들웨어)
2. 위 4종을 해당 프로젝트 기준, 터미널 창에서 다운로드 한다.<br />`npm install redux react-redux redux-promise redux-thunk --save`

<br />

### 2.12.2. Redux MiddleWare (리덕스 미들웨어)
1. **MiddleWare(미들웨어)**
    - 위키백과에서는 OS와 소프트웨어 중간에서 조정과 중개 역할을 하는 중간 소프트웨어.
    - Redux Thunk나 Redux Saga나 Redux Promise 등은 Redux 에서 동작하는 미들웨어.
    - Redux(리덕스)가 가지는 상태관리 라이브러리 중 핵심 기능 중 하나는 미드루에어를 사용할 수 있다는 점.<br />(Context API나 Mobx에 경우에는 미들웨어를 지원하지 않는다.)
2. **Redux 동작 순서**<br />
    ![2-12-1](./img/2-12-1.png)<br />
    - 액션이 dispatch가 된후 리듀서를 호출 하는데 기존에 있던 상태(state)를 dispatch한 액션을 바꾼다.<br >이 때 리듀서가 호출되어 상태를 바꾸기 이전에 동작하는 것이 미들웨어.
    - 액션은 객체 형식이어야 하고 store가 그래야 받을 수 있다.<br />store에서 언제나 객체 형태의 액션만을 받는 게 아닌 promise, function 형태로 받을 때도 있다. 그러면 store에서 받지 못 하게 된다. 그래서 미들웨어 (`Redux-thunk Redux-promise`)를 통해 받는 것이다.

3. 보통 리덕스로 전역 상태로 관리하는 것은 컴포넌트 전역으로 쓰이는 상태(데이터)들을 관리한다. 그런 상태(데이터)는 보통 DB에 저장되어 있기 때문에 API 통신으로 백엔드를 통해서 가져온다. 그렇기에 리덕스로 액션 생성자를 통해 가져오는 데이터들은 대개 비동기 통신으로 가져오는 경우가 많기 때문에 미들웨어가 쓰이는 것이다.<br />예를 들어 클라이언트(리액트)에서 백엔드 API를 연동해야 된다면, Redux Thunk와 redux-promise-middleware 를 사용할 수 있다.

4. **Redux Thunk**
    - Redux Thunk는 액션 생성자가 리턴하는 것을 객체가 아닌 함수를 사용할 수 있게 한다.<br />그리고 함수를 리턴하면 그 함수를 실행이 끝난 뒤에 값을 액션으로 넘겨준다.<br />정리하자면, 기존에 액션 생성자가 리턴하는 객체로는 처리하지 못했던 비동기 작업을 Redux Thunk를 사용하면서 일반 함수를 리턴할 수 있게 됨에 따라 일반 함수에서 가능한 모든 동작들이 가능해진다. 그중에 비동기 통신 작업을 할 수 있어 사용하는 것이다. **Redux Thunk가 비동기 통신을 위해 만들어진 것이 아니라 액션 생성자가 함수를 리턴할 수 있다는 것에 좀 더 초점을 맞추어야 될 것 같다.**
    <br />

    ```javascript
    export const login = (dataToSubmit) => async dispatch => {
        const response = await axios.post(`api/users/login`, dataToSubmit)
        dispatch({ type: 'LOGIN', payload: response })
    }
    ```
    - 위 코드가 Redux Thunk를 사용하여 비동기 통신을 수행하는 코드이다.<br />login 액션 생성자가 dispatch가 되어 가지고 온 파라미터로 Post 요청을 보낸 뒤에 서버에서 응답 해준 값을 액션으로 다시 리듀서에 호출되어 전달해준다.<br />이때 주목해야할 점은 **reponse는 Promise 객체**이다. 미들웨어를 사용하지 않는 경우라면 그대로 통신을 완료하지 않은 Promise 객체를 payload로 보내겠지만 async await에 사용으로 동기적으로 사용할 수 있게 해준다. 즉, Promise 객체가 통신이 완료되고 응답을 받을때까지 기다렸다가 payload에 실어서 리듀서에 전달할 수 있는 것이다.<br />그렇다면 **비동기 통신에만 집중한 미들웨어를 사용하고 싶다면 redux-pomise**가 있다. **Promise 객체에 처리에 있어서는 Redux-Thunk와 거의 동일하다고 보면 되지만 Redux Thunk는 함수를 반환할 수 있다는 것에 좀 더 포커스를 맞쳐야한다.**

5. **Redux Promise**
    ```javascript
    export const userInfo = (body) => {
        const request = axios.post('/api/users/userlist', body)
            .then(response => response.data);
        
        return {
            type: USER_INFO,
            payload: request
        }
    }
    ```
    - 위 코드는 userInfo를 서버에 API 요청을 보내어 응답을 받은 뒤 리듀서에 Promise 통신 결과를 액션으로 넘기는 액션 생성자이다.<br />여기서 중요한 점은 **리듀서에 넘겨주는 request는 Promise 객체이다. 다시 말해 store의 상태를 반영 하기에는 부적절한 타입**이다.<br />원래라면 action을 바로 리듀서에게 넘기면 되지만 **Promise 객체는 통신 결과를 가져와야지만 가능하다. 미들웨어를 사용하지 않고 Promise 객체를 리듀서에 넘겨줄 순 없다.**<br />비동기 작업을 위한 객체를 액션 생성자가 어떻게 처리하겠는가?<br />방법 중 하나는 위 섹션에서 설명한 Redux Thunk를 사용해 비동기 통신을 끝낸 뒤에 dispatch 해주는 방법이 있고 지금 설명할 redux-promise-middleware를 사용하는 방법이 있다.<br />redux-promise를 사용하면 payload 되는 객체가 만약 Promise 객체라면 통신 결과가 나올 때까지 기다린 이후 결과 값을 리듀서에게 전달한다.<br />여기서 주목해야 하는 점은 **미들웨어를 사용하지 않으면 그냥 Promise 객체 그 자체를 payload로 보낸다.**<br />실제 console.log를 출력하면 Promise 객체에 대한 값이 출력된다. 하지만 **redux-promise를 사용한다면 Promise를 객체가 통신이 끝난 뒤 그 값을 payload로 응답**해준다. 이것이 redux-pomise-middleware에 기능이다.<br />리덕스 비동기 통신은 하기 위해서는 다양한 방법이 있고 요새는 꼭 리덕스가 아니더라도 SWR이 뜨고 있다.

<br />

### 2.12.3. Redux 기본 구조(scaffolding) 만들기
1. Redux를 연결해준다. 그러기 위해 `index.js`, 리덕스에서 제공하는 `Provider`를 이용하여 연결한다.
    ```javascript
    // index.js
    import { Provider } from 'react-redux';
    ReactDOM.render(
        <React.StrictMode>
            <Provider>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
    ```
2. `Provider`에 `store={}`를 적용하기 전에 미들웨어를 적용한다.<br />(객체 액션만 받는 리덕스 스토어가 promise, function을 받을 때 오류없이 받을 수 있게 미들웨어 사용)
    - `createStore`만 생성해주어야 하는데, promise와 function도 받을 수 있게 미들웨어와 함께 만들어준다고 이해하면 된다.<br />`const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)`
    ```javascript
    // index.js
    import { Provider } from 'react-redux';
    import { applyMiddleware, createStore } from 'redux';
    import promiseMiddleware from 'redux-promise';
    import ReduxThunk from 'redux-thunk';

    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

    ReactDOM.render(
        <React.StrictMode>
            <Provider>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
    ```

3. 만든 store(`const createStoreWithMiddleware`)를 `Provider store={}`에 적용한다.
    ```javascript
    // index.js
    import { Provider } from 'react-redux';
    import { applyMiddleware, createStore } from 'redux';
    import promiseMiddleware from 'redux-promise';
    import ReduxThunk from 'redux-thunk';

    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

    ReactDOM.render(
        <React.StrictMode>
            <Provider
                store={createStoreWithMiddleware(reduce를 넣어줘야함)}
            >
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
    ```

4. reduce(리듀스)를 적용하기에 앞서 `_reduce/index.js` 파일을 생성한다.<br />(`user` 파일이 없기 때문에 일단 형식만 만들어두고 주석처리함)
    ```javascript
    // _reduce/index.js
    import { combineReducers } from "redux";
    // import user from './user_reducer';

    const rootReducer = combineReducers({
        // user
    })

    export default rootReducer;
    ```
    - STORE에 여러가지의 Reducer가 있을 수 있다.<br />Reducer 안에서 하는 일이 어떻게 state가 변하는 것을 보여준 다음에 변환한 마지막 값을 리턴해주는 것이 Reducer이다.<br />그래서 여러가지 State가 있기 때문에 여러가지의 Reducer가 있는 것이다.<br />때문에 combineReducers를 이용하여 Root Reducer에서 여러가지의 Reducer를 하나로 합쳐주는 것이다.<br />
    ![2-12-2](./img/2-12-2.png)<br />

5. 다시 `/src/index.js` 파일로 돌아와서 새로 생성한 reduce를 연결해준다.
    - `/_reducers/index.js` 경우 `from './reducers'` 까지만 써줘도 `index.js`로 연결이 된다.<br />`import Reducer from './_reducers';`
    ```javascript
    // index.js
    import { Provider } from 'react-redux';
    import { applyMiddleware, createStore } from 'redux';
    import promiseMiddleware from 'redux-promise';
    import ReduxThunk from 'redux-thunk';
    import Reducer from './_reducers';

    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

    ReactDOM.render(
        <React.StrictMode>
            <Provider
                store={createStoreWithMiddleware(Reducer, extension을 넣어준다.)}
            >
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
    ```

6. extension은 [구글에서 "redux extension"](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko)을 검색하면 크롬에서 관리하는 Tool을 확인할 수 있다.<br />이 Tool을 이용하여 redux를 조금 더 편하게 사용할 수 있다. 이 Tool을 사용하려면 아래 코드를 적용해야 한다.<br />(크롬, Redux DEV Tool 확장 프로그램 설치)
    ```javascript
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
    ```
    ```javascript
    // index.js
    import { Provider } from 'react-redux';
    import { applyMiddleware, createStore } from 'redux';
    import promiseMiddleware from 'redux-promise';
    import ReduxThunk from 'redux-thunk';
    import Reducer from './_reducers';

    const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

    ReactDOM.render(
        <React.StrictMode>
            <Provider
                store={createStoreWithMiddleware(Reducer,
                    window.__REDUX_DEVTOOLS_EXTENSION__ &&
                    window.__REDUX_DEVTOOLS_EXTENSION__()
                )}
            >
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
    ```

<br />
<br />

## 2.13. React Hooks
### 2.13.1. React Component
![2-13-1](./img/2-13-1.png)<br />

1. 리액트는 Class Component와 Functional Component로 나뉘어진다.
    - **class component :**<br />많은 기능을 사용할 수 있는 반면에 코드가 길어지고 코드가 복잡해졌다. 또 성능적인 면에서도 느려지는 부분이 있다.
    - **functional component :**<br />제공하는 기능들이 한정적인 반면에 코드가 짧아지고 훨씬 더 간단해졌다. 또 성능적으로 Class component보다는 좋은 장점이 있다.
2. 기존에 class component에서 사용하던 기능들을 functional component에서는 사용할 수 없게 되었다.<br />(아래 이미지 참고, functional 에서는 라이프사이클 등 사용불가)<br />
    ![2-13-2](./img/2-13-2.png)<br />
3. 리액트에서 16.8 Hooks update 되면서 이 이후로 부터 functional component에서도 라이프사이클 등 사용이 가능해졌다.<br />
    ![2-13-3](./img/2-13-3.png)<br />

<br />
<br />

## 2.14. 로그인 페이지
![2-14-1](./img/2-14-1.png)<br />

1. 서버를 킨 후, `app.js`에 기재한 LoginPage인 /login 으로 페이지 이동한다.
2. `Loginpage.js` - 기본 구조 마크업 작업.
    ```javascript
    // LoginPage.js
    import React from 'react'

    function LoginPage() {
        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <label>Email</label>
                    <input type="email" value onChange />

                    <label>Password</label>
                    <input type="password" value onChange />

                    <br />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

    export default LoginPage
    ```
3. value 부분을 state에 넣어줘야 한다.<br />해서 state를 email, password 로 각각 만들어준다.
    - `const [Email, setEmail] = useState(initialState);` : email useState를 만들고
    - `value={Email}` : value에 만든 email useState를 적용시킨다.
    ```javascript
    // LoginPage.js
    import React, { useState } from 'react'

    function LoginPage() {

        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("")

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <label>Email</label>
                    <input type="email" value={Email} onChange />

                    <label>Password</label>
                    <input type="password" value={Password} onChange />

                    <br />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

    export default LoginPage
    ```

4. 위와 같이 작업을 해도 아직까지 input에 타이핑을 할 수가 없다.<br />타이핑을 할 때 해당 state를 onChange로 바꿔줘야 한다.
5. onChange에 적용할 함수를 생성하여 적용해준다.<br />`const onEmailHandler = () => {}` 함수를 만들고<br />`<input type="email" value={Email} onChange={onEmailHandler} />` onChange에 적용해준다.
    - `event.currentTarget.value` 적용이 안 되면 `event.target.value`로 적용해도 된다.
    ```javascript
    // LoginPage.js
    import React, { useState } from 'react'

    function LoginPage() {

        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("")

        const onEmailHandler = (event) => {
            setEmail(event.currentTarget.value)
        }

        const onPasswordHandler = (event) => {
            setPassword(event.currentTarget.value)
        }

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />

                    <br />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

    export default LoginPage
    ```
    <br />

    - onChange에 적용한 이벤트 로직이 동일할 경우, 아래와 같이 수정할 수도 있다.<br />1. state를 객체 형식으로 email, password로 만든다.<br />2. value에 `inputs.email`처럼 적용을 한다.<br />3. onValueHandler 이벤트 경우, `event.target`의 name과 value 값을 이용하여 state 값을 변경해준다. (input 각각에 name, value를 적용해야 함)
    ```javascript
    // LoginPage.js
    import React, { useState } from 'react'

    function LoginPage() {

        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("")

        const [inputs, setinputs] = useState({
            email: '',
            password: ''
        })

        const onValueHandler = (event) => {
            setinputs({
                [event.target.name]:event.target.value
            })
        }

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}>
                    <label>Email</label>
                    <input name='email' type="email" value={inputs.email} onChange={onValueHandler} />

                    <label>Password</label>
                    <input name='password' type="password" value={inputs.password} onChange={onValueHandler} />

                    <br />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

    export default LoginPage
    ```


6. 이메일과 비밀번호 입력 후, 버튼을 눌러도 아무런 반응이 없다.<br />form에 submit을 주려면 `form onSubmit={}` 이벤트를 적용한다.
    ```javascript
    // LoginPage.js
    import React, { useState } from 'react'

    function LoginPage() {

        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("");

        const onEmailHandler = (event) => {
            setEmail(event.currentTarget.value)
        }

        const onPasswordHandler = (event) => {
            setPassword(event.currentTarget.value)
        }

        const onSubmithandler = (event)=> {

        }

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}
                    onSubmit={onSubmithandler}
                >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />

                    <br />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

    export default LoginPage
    ```

7. Login 버튼을 클릭하면 현재 저장된 Email, Password 값을 `axios`를 이용하여 서버로 전달한다.
    - `/api/users/login` 경로는 `server/index.js`에 적용했던 `app.post('/api/users/login', (req, res) => {` 동일하게 적용.
    - `axios`에서 값(`let body`)을 전해주고 `response =>{}` 를 받아온다. 이때 리덕스를 사용한다.
    ```javascript
    // LoginPage.js
    import React, { useState } from 'react'
    import Axios from 'axios';

    function LoginPage() {

        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("");

        const onEmailHandler = (event) => {
            setEmail(event.currentTarget.value)
        }

        const onPasswordHandler = (event) => {
            setPassword(event.currentTarget.value)
        }

        const onSubmithandler = (event)=> {
            event.preventDefault();
            // console.log(Email, Password);

            let body = {
                email : Email,
                password: Password
            }

            Axios.post('/api/users/login', body)
                .then(resposen => {
                    
                })
        }

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}
                    onSubmit={onSubmithandler}
                >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />

                    <br />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

    export default LoginPage
    ```
8. Redux(리덕스)를 사용하려면 먼저 리덕스를 불러온다.<br />
    ![2-14-2](./img/2-14-2.png)<br />

    - Redux(리덕스) 데이터 Flow를 보면, React Component에서 `Dispatch(action)` -> `ACTION` -> `REDUCER` 으로 데이터 흐름을 알 수 있다.
    - Dispatch를 사용하기 위헤 `useDespatch`를 불러온다.<br />`import {useDispatch} from 'react-redux'`<br />`const dispatch = useDispatch();`
    - `dispatch(액션이름)` = `dispatch(loginUser())`<br />디스패치를 이용하여 "loginUser" ACTION을 취한다.
    - `dispatch(loginUser(body))` = `loginUser` 액션에 body 정보를 보내준다.<br />원래는 `Axios.post('경로', 정보`로 적용하는데, 리덕스를 사용할 때에는 dispatch(액션(정보))로 보내준다.
    - loginUser 액션은 `_actions/user_action.js` 파일을 생성하여 적용한다.
    - `LoginPage.js`에서 리퀘스트한 `Axios.post()`를 `user_action.js`에서 해준다.
    ```javascript
    // LoginPage.js
    import React, { useState } from 'react'
    import Axios from 'axios';
    import {useDispatch} from 'react-redux'

    function LoginPage() {
        const dispatch = useDispatch();

        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("");

        const onEmailHandler = (event) => {
            setEmail(event.currentTarget.value)
        }

        const onPasswordHandler = (event) => {
            setPassword(event.currentTarget.value)
        }

        const onSubmithandler = (event)=> {
            event.preventDefault();
            // console.log(Email, Password);

            let body = {
                email : Email,
                password: Password
            }

            dispatch(loginUser(body))
        }

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}
                    onSubmit={onSubmithandler}
                >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />

                    <br />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

    export default LoginPage
    ```
    ```javascript
    // _actions/user_action.js
    import axios from "axios";

    export default function loginUser(dataTosubmit) {
        
        // request 변수 안에 리스펀스 데이터를 대입.
        const request = Axios.post('/api/users/login', dataTosubmit)
                            .then(resposen => { resposen.data })

        // 리턴하여 리듀서로 보낸다.
        return {

        }
    }
    ```

9. return 하여 리듀서로 보내야 한다.<br />
    ![2-14-3](./img/2-14-3.png)<br />

    - 리듀서에서 `previousState`과 현재 액션(`function loginUser(dataTosubmit)`)을 조합해서 그 다음 state를 만들어주는 것.
    - 즉, 새로 만든 변수 `request`를 리듀서에 넘겨주는 작업을 하는 것이다.
    - 액션은 type과 response를 넣어줘야 한다.
    ```javascript
    // _actions/user_action.js
    import Axios from "axios";

    export function loginUser(dataTosubmit) {
        
        // request 변수 안에 리스펀스 데이터를 대입.
        const request = Axios.post('/api/users/login', dataTosubmit)
                            .then(respose =>  respose.data)

        // 리턴하여 리듀서로 보낸다.
        return {
            type: 'LOGIN_USER',
            // respose를 payload로 대체
            payload: request
        }
    }
    ```
    <br />

    - `_action/user_action.js` 에서 작업한 데이터, 리듀서로 보내기
    - `_reducers/user_reducer.js` 파일과 `_actions/types.js`을 생성한다.
    ```javascript
    // LoginPage.js
    import React, { useState } from 'react'

    import { useDispatch } from 'react-redux'
    import { loginUser } from '../../../_actions/user_action'

    function LoginPage() {
        const dispatch = useDispatch();

        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("");

        const onEmailHandler = (event) => {
            setEmail(event.currentTarget.value)
        }

        const onPasswordHandler = (event) => {
            setPassword(event.currentTarget.value)
        }

        const onSubmithandler = (event)=> {
            event.preventDefault();
            // console.log(Email, Password);

            let body = {
                email : Email,
                password: Password
            }

            dispatch(loginUser(body))
        }

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}
                    onSubmit={onSubmithandler}
                >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />

                    <br />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

    export default LoginPage
    ```
    - type의 경우, _actions에 `types.js` 파일에서 관리한다.
    ```javascript
    // _actions/user_action.js
    import Axios from "axios";
    import {
        LOGIN_USER
    } from './types'

    export function loginUser(dataTosubmit) {
        
        // request 변수 안에 리스펀스 데이터를 대입.
        const request = Axios.post('/api/users/login', dataTosubmit)
                            .then(respose =>  respose.data)

        // 리턴하여 리듀서로 보낸다.
        return {
            type: LOGIN_USER,
            // respose를 payload로 대체
            payload: request
        }
    }
    ```
    ```javascript
    // _actions/types.js
    export const LOGIN_USER = "login_user";
    ```
    ```javascript
    // _reducers/user_reducer.js
    import { combineReducers } from "redux";
    import user from './user_reducer';

    const rootReducer = combineReducers({
        user
    })

    export default rootReducer;
    ```
    ```javascript
    // _reducers/user_reducer.js
    import {
        LOGIN_USER
    } from '../_actions/types'

    export default function(state={}, action) {
        switch (action.type) {
            case LOGIN_USER:
                return {...state, loginSuccess: action.payload};
                break;
            default:
                return state;
        }
    }
    ```

10. 크롬확장프로그램 `Redux DEVTool` 을 이용하여 확인해본다.
    - state에 `user: {}` 정보가 들어있는 것을 확인할 수 있다.<br />
        ![2-14-4](./img/2-14-4.png)<br />
    - 몽고DB에 저장된 `아이디 : test@email.com` `비밀번호 : 1234567` 로 로그인을 해본다.<br />
        ![2-14-5](./img/2-14-5.png)<br />

11. 마지막으로 잘 접속이 되면 랜딩페이지로 이동되게 한다.
    - 페이지 이동을 시킬 땐 `props.history.push('/')` 처럼 사용한다. `/`에 경로를 적용하면 된다.<br />`props` 경우, `LoginPage(props)`를 기재한 후에 사용이 가능하다.
    ```javascript
    // LoginPage.js
    import React, { useState } from 'react'

    import { useDispatch } from 'react-redux'
    import { loginUser } from '../../../_actions/user_action'

    function LoginPage(props) {
        const dispatch = useDispatch();

        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("");

        const onEmailHandler = (event) => {
            setEmail(event.currentTarget.value)
        }

        const onPasswordHandler = (event) => {
            setPassword(event.currentTarget.value)
        }

        const onSubmithandler = (event)=> {
            event.preventDefault();
            // console.log(Email, Password);

            let body = {
                email : Email,
                password: Password
            }

            dispatch(loginUser(body))
                .then(respose => {
                    if(respose.payload.loginSuccess) {
                        props.history.push('/')
                    } else {
                        alert('Error')
                    }
                })
        }

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}
                    onSubmit={onSubmithandler}
                >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />

                    <br />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

    export default LoginPage
    ```
    <br />

    - 버전 문제로 push(`props.history.push('/')`) 에러 나올 때.<br />리액트 라우터 버전 v6 사용할 땐 아래와 같이 수정.
        - import : `import { useNavigate } from 'react-router-dom';`
        - 함수 안에 변수 추가 : `let navigate = useNavigate();`
        - dspatch -> then : `navigate('/home');`
            ```javascript
            // v5
            history.push('/home');
            history.replace('/home');

            // v6
            navigate('/home');
            navigate('/home', {replace: true});
            ```
        - [history.push() - 버전에 따른 사용 가이드](https://www.digitalocean.com/community/tutorials/react-react-router-v6)
    ```javascript
    // LoginPage.js
    import React, { useState } from 'react'

    import { useDispatch } from 'react-redux'
    import { useNavigate } from 'react-router-dom';
    import { loginUser } from '../../../_actions/user_action'

    function LoginPage() {
        const dispatch = useDispatch();

        const [Email, setEmail] = useState("");
        const [Password, setPassword] = useState("");

        const onEmailHandler = (event) => {
            setEmail(event.currentTarget.value)
        }

        const onPasswordHandler = (event) => {
            setPassword(event.currentTarget.value)
        }

        const onSubmithandler = (event)=> {
            event.preventDefault();
            // console.log(Email, Password);

            let body = {
                email : Email,
                password: Password
            }

            dispatch(loginUser(body))
                .then(respose => {
                    if(respose.payload.loginSuccess) {
                        navigate("/")
                    } else {
                        alert('Error')
                    }
                })
        }

        let navigate = useNavigate();

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}
                    onSubmit={onSubmithandler}
                >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />

                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />

                    <br />
                    <button>
                        Login
                    </button>
                </form>
            </div>
        )
    }

    export default LoginPage
    ```

<br />
<br />

## 2.15. 회원 가입 페이지
1. 회원 가입 페이지도 리덕스를 이용하여 작업한다.
2. `LoginPage.js`을 참고하여 작업을 한다.<br />(* 회원가입 레이아웃 구조, 아래 이미지 참고)<br />
    ![2-15-1](./img/2-15-1.png)<br />
    <br />

    - `LoginPage` 구조와 비슷해서 먼저 동일하게 붙여넣기 한다.
    - 이름과 비밀번호 확인이 추가되었기 때문에 `useState`와 이벤트 핸들러(`onNameHandler, onConfirmPasswordHandler`)를 추가 작업한다.
    ```javascript
    import React, { useState } from 'react'

    import { useDispatch } from 'react-redux'
    import { useNavigate } from 'react-router-dom';
    import { loginUser } from '../../../_actions/user_action'

    function RegisterPage() {
        const dispatch = useDispatch();

        const [Email, setEmail] = useState("");
        const [Name, setName] = useState("")
        const [Password, setPassword] = useState("");
        const [ConfirmPassword, setConfirmPassword] = useState("");

        const onEmailHandler = (event) => {
            setEmail(event.currentTarget.value)
        }
        
        const onNameHandler = (event) => {
            setName(event.currentTarget.value)
        }

        const onPasswordHandler = (event) => {
            setPassword(event.currentTarget.value)
        }
        
        const onConfirmPasswordHandler = (event) => {
            setConfirmPassword(event.currentTarget.value)
        }

        const onSubmithandler = (event)=> {
            event.preventDefault();
            // console.log(Email, Password);

            let body = {
                email : Email,
                password: Password
            }

            dispatch(loginUser(body))
                .then(respose => {
                    if(respose.payload.loginSuccess) {
                        navigate("/")
                    } else {
                        alert('Error')
                    }
                })
        }

        let navigate = useNavigate();

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <form style={{display: 'flex', flexDirection: 'column'}}
                    onSubmit={onSubmithandler}
                >
                    <label>Email</label>
                    <input type="email" value={Email} onChange={onEmailHandler} />

                    <label>Name</label>
                    <input type="text" value={Name} onChange={onNameHandler} />
                    
                    <label>Password</label>
                    <input type="password" value={Password} onChange={onPasswordHandler} />

                    <label>Confirm Password</label>
                    <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                    <br />
                    <button>
                        회원 가입
                    </button>
                </form>
            </div>
        )
    }

    export default RegisterPage
    ```
3. 이제 회원가입 버튼을 클릭하면 회원가입이 이루어지게 작업한다.
    - 디스패치로 보낼 액션의 이름은 `registerUser`로 적용.
    - 변수 `body`에 이름과 비밀번호 확인 부분도 추가를 해줘야 하는데, 비밀번호 확인의 경우 if문으로 먼저 체크를 해줘야 한다.<br />비밀번호의 값이 같을 경우, 디스패치로 이동이 되어야 한다.
        ```javascript
        if(Password !== ConfirmPassword) {
            return alert("비밀번호와 비밀번호 확인은 같아야 합니다!")
        } 
        ```
    - 디스패치에 적용한 `registerUser` 액션의 경우, `user_action.js`에 추가.<br />`loginSuccess`, `register` == `server/index.js` 파일 참고.
        ```javascript
        // _actions/user_action.js
        import Axios from "axios";
        import {
            LOGIN_USER, REGISTER_USER
        } from './types'

        export function loginUser(dataTosubmit) {
            
            // request 변수 안에 리스펀스 데이터를 대입.
            const request = Axios.post('/api/users/login', dataTosubmit)
                                .then(respose =>  respose.data)

            // 리턴하여 리듀서로 보낸다.
            return {
                type: LOGIN_USER,
                // respose를 payload로 대체
                payload: request
            }
        }

        export function registerUser(dataTosubmit) {
            const request = Axios.post('/api/users/register', dataTosubmit)
            .then(respose =>  respose.data)

            // 리턴하여 리듀서로 보낸다.
            return {
                type: REGISTER_USER,
                payload: request
            }
        }

        // _actions/types.js
        export const LOGIN_USER = "login_user";
        export const REGISTER_USER = "register_user";
        ```
        ```javascript
        // _reducers/user_reducer.js
        import {
            LOGIN_USER, REGISTER_USER
        } from '../_actions/types'

        export default function(state={}, action) {
            switch (action.type) {
                case LOGIN_USER:
                    return {...state, loginSuccess: action.payload}
                    break;
                case REGISTER_USER:
                    return {...state, success: action.payload}
                    break;
                default:
                    return state;
            }
        }
        ```
        ```javascript
        // RegisterPage.js
        import React, { useState } from 'react'

        import { useDispatch } from 'react-redux'
        import { useNavigate } from 'react-router-dom';
        import { registerUser } from '../../../_actions/user_action'

        function RegisterPage() {
            const dispatch = useDispatch();

            const [Email, setEmail] = useState("");
            const [Name, setName] = useState("")
            const [Password, setPassword] = useState("");
            const [ConfirmPassword, setConfirmPassword] = useState("");

            const onEmailHandler = (event) => {
                setEmail(event.currentTarget.value)
            }
            
            const onNameHandler = (event) => {
                setName(event.currentTarget.value)
            }

            const onPasswordHandler = (event) => {
                setPassword(event.currentTarget.value)
            }
            
            const onConfirmPasswordHandler = (event) => {
                setConfirmPassword(event.currentTarget.value)
            }

            const onSubmithandler = (event)=> {
                event.preventDefault();

                if(Password !== ConfirmPassword) {
                    return alert("비밀번호와 비밀번호 확인은 같아야 합니다!")
                } 

                let body = {
                    email : Email,
                    name : Name,
                    password: Password,
                }

                dispatch(registerUser(body))
                    .then(respose => {
                        if(respose.payload.success) {
                            navigate("/login")
                        } else {
                            alert('Failed to sign up')
                        }
                    })
            }

            let navigate = useNavigate();

            return (
                <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center',
                    width: '100%', height: '100vh'
                }}>
                    <form style={{display: 'flex', flexDirection: 'column'}}
                        onSubmit={onSubmithandler}
                    >
                        <label>Email</label>
                        <input type="email" value={Email} onChange={onEmailHandler} />

                        <label>Name</label>
                        <input type="text" value={Name} onChange={onNameHandler} />
                        
                        <label>Password</label>
                        <input type="password" value={Password} onChange={onPasswordHandler} />

                        <label>Confirm Password</label>
                        <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                        <br />
                        <button>
                            회원 가입
                        </button>
                    </form>
                </div>
            )
        }

        export default RegisterPage
        ```
4. 코드를 다 작성했다면, 회원가입을 해본다.
    ```
    E-mail : leh8767@gmail.com
    Name : 이은혜
    Password : 987654321
    ```
    ![2-15-2](./img/2-15-2.png)<br />

<br />
<br />

## 2.16. 로그아웃
1. `http://localhost:3000/login`에 접속하여 해당 아이디와 비밀번호를 로그인을 하게 되면 `DEV Tool`에서 `loginSuccess:true`를 확인할 수 있다.<br />
    ![2-16-1](./img/2-16-1.png)<br />
2. `LandingPage.js`에서 로그아웃 버튼을 생성하고, `onClick={}` 이벤트를 적용한다.
    ```javascript
    const onClickHandler = () => {
        axios.get('/api/users/logout')
            .then(response => {
                console.log(response.data)
            })
    }
    
    return (
        <button onClick={onClickHandler}>로그아웃</button>
    )
    ```
3. 위와 같이 코드를 작성한 후, 로그아웃 버튼을 누르면 콘솔로그에 `success: true`가 출력된다.<br />
    ![2-16-2](./img/2-16-2.png)<br />

4. 로그아웃 버튼을 클릭하면 로그인 페이지(`navigate("/login")`)로 이동되게 적용.
    ```javascript
    // LandingPage.js
    import React, {useEffect} from 'react';
    import axios from 'axios';

    import { useNavigate } from 'react-router-dom';

    function LandingPage() {
        useEffect(() => {
            axios.get('/api/hello')
                .then(response => console.log(response.data))
        }, [])

        const onClickHandler = () => {
            axios.get('/api/users/logout')
                .then(response => {
                    // console.log(response.data)
                    if(response.data.success) {
                        navigate("/login")
                    } else {
                        alert('로그아웃 하는데 실패 했습니다.')
                    }
                })
        }

        let navigate = useNavigate();

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center',
                width: '100%', height: '100vh'
            }}>
                <h2>시작페이지</h2>
                <button onClick={onClickHandler}>로그아웃</button>
            </div>
        )
    }

    export default LandingPage
    ```

<br />
<br />

## 2.17. 인증체크
![2-17-1](./img/2-17-1.png)<br />
<br />

이렇게 인증이 이뤄줘야만 들어갈 수 있는 페이지가 있다<br />→ 또 인증이 필요한 것들이 있을까?<br />→ 댓글작성, 파일 전송, 파일 업로드 등등...<br />→ 이러한 인증들을 어떻게 할 수 있을 까?<br />
<br />

1. 들어갈 수 있는 페이지들에 대한 통제는 → HOC(HigherOrderComponent)
    -  **HOC :**<br />다른 컴포넌트들을 받은 다음에 새로운 컴포넌트를 리턴하는 Function.<br />`const EnhancedComponent = higherOrderComponent(WrappedComponent);`
    - Auth라는 컴포넌트는 HigherOrderComponent이다. Auth 컴포넌트에 다른 컴포넌트(ex. WrappedComponent)들을 넣고 새로운 컴포넌트(ex. EnhancedComponent)를 만든다.<br />
        ![2-17-2](./img/2-17-2.png)<br />
    
2. **HOC와 인증에 관한 것이 어떻게 연관이 있는 걸까?**
    - HOC 컴포넌트 Auth에 모든 컴포넌트 들을 넣는다.<br />`app.js` 파일을 보면 현재 `LandingPage, LoginPage, RegisterPage` 총 3개의 페이지가 있다.
    - [예시1] `LandingPage`를 Auth(HOC) 컴포넌트에 넣게 되면,<br />
        ![2-17-3](./img/2-17-3.png)<br />
        <br />

        Auth(HOC) 컴포넌트 **(React)** -- 리퀘스트(Request) == 현재 LandingPage에 있는 사람의 상태(정보) --→ Back End **(서버)**<br />※ 상태 : 로그인 중인지? 아닌 지에 대한 정보 등
        <br />

    - [예시2] `Admin Page`를 Auth(HOC) 컴포넌트에 넣게 되면,<br />
        ![2-17-4](./img/2-17-4.png)<br />
        <br />

        Auth(HOC) 컴포넌트 **(React)** -- 리퀘스트(Request) == 현재 Admin Page에 있는 사람의 상태(정보) --→ Back End **(서버)**<br />>> 현재 Admin page에 있는 사람이 관리자가 아니거나 로그인이 안 되어 있는 상태일 경우 Auth 에서 판단을 하여 A로 액션을 취하고, 관리자이면 B 액션을 취한다.

3. Auth(HOC) 컴포넌트를 리액트에서 만들어서 페이지들의 인증을 컨트롤 하려고 한다.
4. `/hoc/auth.js` 파일을 생성한다. (기본 코드 구조)
    ```javascript
    // hoc/auth.js
    import React from "react";

    export default function(SpecificComponent, option, adminRoute = null) {

        function AuthenticationCheck(props) {

        }

        return AuthenticationCheck
    }
    ```
5. 첫번째로 Back end(서버)에 Request(리퀘스트)를 날려서 그 사람의 현재 상태 정보를 가져오는 부분을 처리한다.
    - useEffect를 사용한다. 
    - NodoJS에서 만들어놓은 Back end API(`app.get('/api/users/auth', auth, (req, res) => {` = server/index.js 참고)<br />해당 부분의 미들웨어 Auth(`/middleware/auth.js`) 파일을 살려보면 token을 사용해서 쿠키(cookies) 안에다가 토큰을 저장하여 유저가 현재 로그인한 유저인지? 로그인 하지 않은 유저인지?를 판단(체크)하여 다시 리액트 부분에 정보를 전달해주는 라우터.
    - 때문에, Request를 `/api/users/auth`에 보내주면 되는데, 이 때 dispatch를 이용한다.
    - dispatch에 사용될 `auth()` 액션은 `../_actions/use_action.js`에 생성하여 사용한다.
    - `user_reducer.js`에 `userData`로 쓴 이유는 `server/index.js`의 `app.get('/api/users/auth', auth, (req, res) => {` 영역을 보면 `_id, isAdmin, isAuth, email` 등등의 키:밸류 값이 저장되어 있는데 해당 데이터의 정보를 그대로 받는다. 때문에 userDate로 정한 것. (다른 이름으로 해도 됨)
    ```javascript
    // _actions/types.js
    export const AUTH_USER = "auth_user";

    // _actions/user_action.js
    import { AUTH_USER } from './types'

    export function auth() {
        const request = Axios.get('/api/users/auth')
        .then(respose =>  respose.data)

        // 리턴하여 리듀서로 보낸다.
        return {
        type: AUTH_USER,
        payload: request
        }
    }
    ```
    ```javascript
    // _reducers/user_reducer.js
    import { AUTH_USER } from '../_actions/types'

    export default function(state={}, action) {
        switch (action.type) {
            case AUTH_USER:
                return {...state, userData: action.payload}
                break;
            default:
                return state;
        }
    }
    ```
    ```javascript
    // hoc/auth.js
    import React, { useEffect } from "react";
    import Axios from "axios";
    import { useDispatch } from 'react-redux';
    import { auth } from '../_actions/user_action';


    export default function(SpecificComponent, option, adminRoute = null) {

        function AuthenticationCheck(props) {

            const dispatch = useDispatch();

            useEffect(() => {

                dispatch(auth()).then(response => {
                    console.log(response)
                })
                
            }, [])
        }

        return AuthenticationCheck
    }
    ```
6. `auth.js` 코드를 다 작성했다면, 이제 auth 컴포넌트에 인증이 필요한 페이지 컴포넌트를 넣어줘야(연결해줘야) 한다.
7. auth 컴포넌트에 다른 컴포넌트를 넣어줄 때, `App.js`에서 작업을 한다.
 - 먼저, `hoc/auth.js`를 import 해온다. `import Auth from "./hoc/auth";`
 - 인증이 필요한 컴포넌트를 `Auth()`로 감싸준다. `Auth(<LandingPage />, option, 어드민이 필요한 경우에만 true )`
    ```javascript
    // hoc/auth.js
    export default function(SpecificComponent, option, adminRoute = null) {
    ```
    - SpecificComponent : 컴포넌트 태그
    - option : null or true or false<br /><b>option - null :</b> 아무나 출입이 가능한 페이지<br /><b>option - true :</b> 로그인한 유저만 출입이 가능한 페이지<br /><b>option - false :</b> 로그인한 유저는 출입 불가능한 페이지
    <br />

    ```javascript
    // App.js
    import React from "react";
    import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

    import LandingPage from "./components/views/LandingPage/LandingPage";
    import LoginPage from "./components/views/LoginPage/LoginPage";
    import RegisterPage from "./components/views/RegisterPage/RegisterPage";

    import Auth from "./hoc/auth";

    function App() {
        return (
            <Router>
                <div>
                    <Routes>
                        <Route path="/" element={Auth(LandingPage, null)} />
                        <Route path="/login" element={Auth(LoginPage, false)} />
                        <Route path="/register" element={Auth(RegisterPage, false)} />
                    </Routes>
                </div>
            </Router>
        );
    }

    export default App;
    ```
    ```javascript
    // hoc/auth.js
    import React, { useEffect } from 'react';
    import { useDispatch } from 'react-redux';
    import { useNavigate } from 'react-router-dom';
    import { auth } from '../_actions/user_action';


    export default function (SpecificComponent, option, adminRoute = null) {

        // option - null  => 아무나 출입이 가능한 페이지
        // option - true  => 로그인한 유저만 출입이 가능한 페이지
        // option - false => 로그인한 유저는 출입 불가능한 페이지

        function AuthenticationCheck(props) {

            const dispatch = useDispatch();
            let navigate = useNavigate();

            useEffect(() => {  // 페이지에 접근할 때마다 실행되서 권한을 확인할 수 있도록 함

                // 원래는 axios.get('api/users/auth')
                dispatch(auth()).then(response => { // auth 액션함수가 반환하는 값(=reducer에게 전달될 값)
                    // 백엔드에서 처리해서 가져온 정보
                    console.log(response)

                    // 로그인하지 않은 상태
                    if(!response.payload.isAuth) {
                        if(option) {
                            navigate('/login')
                        }
                    } else {
                        //로그인한 상태
                        //adminRoute에 접근하려는데 admin이 아닌 경우
                        if(adminRoute && !response.payload.isAdmin) {navigate("/")}
                        else {
                            //option이 false일 때, login page or register page
                            //로그인한 유저는 출입불가인 페이지에 접근할떄
                            if(option === false){navigate('/')}
                        }
                    }
                })
                
            }, [])

            return (
                <SpecificComponent />
            )
        }

        return (
            <AuthenticationCheck />
        )
    }
    ```
    ![2-17-5](./img/2-17-5.png)<br />

8. `isAuth` 값에 따라 로그인 또는 로그아웃 버튼 보여지게 하기
    ```javascript
    // LandingPage.js
    import React, {useEffect, useState} from 'react';
    import axios from 'axios';

    import { useNavigate, Link } from 'react-router-dom';

    function LandingPage() {
        useEffect(() => {
            axios.get('/api/hello')
                .then(response => console.log(response.data))
            
            axios.get('/api/users/auth')
                .then(response => {
                    console.log(response.data);
                    setbtnlogout(response.data.isAuth)
                })
        }, [])

        const [btnlogout, setbtnlogout] = useState(false)

        const onClickHandler = () => {
            axios.get('/api/users/logout')
                .then(response => {
                    // console.log(response.data)
                    if(response.data.success) {
                        navigate("/login")
                    } else {
                        alert('로그아웃 하는데 실패 했습니다.')
                    }
                })
        }

        let navigate = useNavigate();

        return (
            <div style={{
                display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column',
                width: '100%', height: '100vh'
            }}>
                <h2>시작페이지</h2>
                {
                    (btnlogout === true) 
                    ? <button onClick={onClickHandler}>로그아웃</button> : <Link to="/login">로그인</Link>
                }
            </div>
        )
    }

    export default LandingPage
    ```