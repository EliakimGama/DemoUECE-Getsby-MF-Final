/// <reference types="react" />

/**
 * We have already defined "paths" in "tsconfig.json",
 * so this declare is not needed!
 */
declare module 'remote/Button' {
  const Button: React.ComponentType

  export default Button
}

declare module 'nav/Page' {
  const Page: React.ComponentType

  export default Page
}

declare module '*.module.scss'
