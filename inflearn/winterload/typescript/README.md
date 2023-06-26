## section 1
### 1. Hello TS World!
- 폴더를 기준으로 `npm init` -> `package.json` 생성
- `npm i @types/node` 설치
- 타입스크립트 컴파일러를 글로벌로 설치 (맥 경우) : `sudo npm install typescript -g`
- `tsc -v` : 현 타입스크립트 버전
- `tsc 컴파일파일-경로` : `tsc src/index.ts`로 컴파일하게 되면 `index.js` 생성
- `index.ts`의 콘솔 로그를 확인하고자 한다면 `node src/index.js`
- 매번 코드 작성하고 컴파일을 하기엔 번잡스럽다.<br />1. `tsc src/index.ts`<br />2. `node src/index.js`<br />때문에 `sudo npm install ts-node -g`로 패키지를 설치.<br />`ts-node src/index.ts`하면 끝!!
<br />
<br />

### 2. 타입스크립트 컴파일러 옵션 설정하기
- [타입스크립트 컴파일러 옵션 설정하기](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39)
- 컴파일러 옵션은 `package` 단위로 설정할 수 있다. (즉, 프로젝트마다 설정)
<br />

1. `tsc --init` : `tsconfig.json` 파일 생성. (타입스크립트 설정 파일)
2. [include 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#21aa35e2907547e5ac3930199ae821b3)
  - include: tsc에게 컴파일 할 타입스크립트 파일의 범위와 위치를 알려주는 옵션.
<br />

3. [target 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#360f30d90dd248abbf1569e04b638073)
  - target : 컴파일 결과 생성되는 자바스크립트 코드의 버전을 설정.
    ```javascript
    // 화살표 함수 이전의 자바스크립트
    "compilerOptions": {"target": "ES5"},

    // ESNext === 자바스크립트 최신버전
    "compilerOptions": {"target": "ESNext"},
    ```
  <br />

4. [module 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#c7c837969ee54889a12cfbd66cd035a7)
  - module : 변환되는 자바스크립트 코드의 모듈 시스템을 설정.<br />**모든 프로젝트가 `ES6`를 지원하진 않는다. 상황에 따라 사용해야 한다.**
    ```javascript
    //  require나 exports 등의 CommonJS 문법
    "compilerOptions": { 
      "module": "CommonJS" 
    },

    // ES6 모듈 시스템
    "module": "ESNext" 
    ```
    <br />

5. [outDir 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#46a174e9caa44f08af23e701ab5bfad9)
  - outDir : 컴파일 결과 생성할 자바스크립트 코드의 위치를 결정
  - `ts` 파일이 몇 없을 때는 괜찮다지만 많을 경우, 해당 폴더에 `js` 파일까지 변환될 경우 복잡 넌잡...
  - 해서 `outDir` 옵션을 사용하여 컴파일된 `js` 파일을 모아준다.
  <br />

6. [strict 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#c39fa16068ab4a0593fdf0ea100ef2f7)
  - strict : 타입스크립트 컴파일러의 타입 검사 엄격함 수준을 정한다.
    ```javascript
    "compilerOptions": { 
      "strict": true
    },
    ```
    <br />

7. [ModuleDetection 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#eb62169cc370411bb32b3e2498b1e068)
  - ModuleDetection : 타입스크립트의 모든 파일은 기본적으로 **전역 파일(모듈)로 취급**
    ```javascript
    // a.ts
    const a = 1; // ❌

    // b.ts
    const a = 1; // ❌
    ```
  - **이럴 때에는 각 파일에 모듈 시스템 키워드(export, import)를 최소 하나 이상 사용해 해당 파일을 전역 모듈이 아닌 로컬(독립) 모듈로 취급되도록 만들어야 하는데 이를 자동화 하는 옵션이 바로 moduleDetection 옵션**.
  - 개별모듈로 만들기 위해 `export {}` 또는 `import`를 사용하여 독립적인 파일로 만들어서 사용이 가능.
  - 또는 `tsconfig.json`에서 `"moduleDetection": "force",`로 적용.  <br />=> 아래와 같이 설정해주면 컴파일된 `js` 파일을 보면 `export {}` 추가된 것을 확인할 수 있다.
    ```javascript
    "compilerOptions": { 
      "moduleDetection": "force",
    }
    ```
  - `tsconfig.json`에 적용했는데 안 바뀔 경우, `TypeScript: TS 서버 다시 시작`을 해준다.
<br />

8. [ts-node 옵션](https://ts.winterlood.com/e7ec2f43-9d8c-4d30-bb2c-29e1b57f6a39#878a11c23d274e70a05d16ab73552007)
  - moduleDetection 옵션을 활성화 하고 타입스크립트 파일에서 모듈 시스템을 사용하게 되면 **ts-node로 실행시 오류가 발생**
  - ts-node의 옵션을 설정하면 ts-node로 타입스크립트 모듈을 실행
    ```javascript
    // package.json
    "type": "module",

    // tsconfig.json
    "ts-node": {
      "esm": true
    },
    ```