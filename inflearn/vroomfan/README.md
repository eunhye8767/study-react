# NextJs 13

<hr />

### 0. 개발 환경 설정하기
- NextJs 13 설치
  - https://nextjs.org/docs#automatic-setup
  - https://nextjs.org/docs/getting-started/installation
  ```javascript
  npx create-next-app@latest
  ```
  ```
  ✔ Would you like to use TypeScript? … Yes
  ✔ Would you like to use ESLint? … Yes
  ✔ Would you like to use Tailwind CSS? … Yes
  ✔ Would you like to use `src/` directory? … No
  ✔ Would you like to use App Router? (recommended) … Yes
  ✔ Would you like to customize the default import alias? … No
  ```

- ESLint
  - https://nextjs.org/docs/pages/building-your-application/configuring/eslint
  - NextJs 에서 지원하는 `core-web-vitals ruleset`에 해당합니다.<br />개발자에게 권장되는 configuration 이기 때문에 이것을 그대로 사용하겠습니다.
  ```javascript
  // .eslintrc.json
  {
    "extends": "next/core-web-vitals"
  }
  ```

- Prettier 
  - https://nextjs.org/docs/pages/building-your-application/configuring/eslint#prettier
  - Prettier 설치
    - https://prettier.io/docs/en/install.html
    ```javascript
    yarn add --dev --exact prettier
    ```

  - `echo {}> .prettierrc.json` 파일 생성
  - `.prettierrc.json` 작성
    ```javascript
    {
      "trailingComma": "es5",
      "tabWidth": 2,
      "semi": true,
      "singleQuote": true
    }
    ```
  - Prettier과 ESLint 두 rule이 충돌하는 것을 막아주기 위해 아래와 같이 명령어 실행(NextJS 공홈)
    ```javascript
    npm install --save-dev eslint-config-prettier
    // or
    yarn add --dev eslint-config-prettier
    ```
    ```javascript
    // .eslintrc.json 
    {
      "extends": ["next/core-web-vitals","prettier"]
    }
    ```

- `ESLint`와 `Prettier` 설치 후 에러가 발생했을 때
  - `ESLint TypeError: this.libOptions.parse is not a function`
  - `IDE`와 `ESLint`가 호환되지 않는 경우이므로 `package.json`에서 `eslint: 8.22.0` (8.22 버전이하로) 낮춰줍니다.
  - `ESLint`를 다운그레이드하면 에러가 없어지는 것을 확인할 수 있다.
  


- `node js` 업데이트
  ```javascript
  // 버전 확인
  node -v

  // 모듈이 설치 안 되어 있을 경우 n 모듈을 설치
  sudo npm install -g n

  // node.js를 원하는 버전으로 업데이트 한다.
  sudo n stable

  sudo n latest    // 최신
  sudo n lts       // LTS 버전
  sudo n <version> // 특정 버전
  ```