import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <div>Pricing</div>
      </div>
    </main>
  )
}





// implement native apply method copy in javascript

// const obj = {
//   name: 'John',
//   age: 30,
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}`)
//   }
// }

// obj.greet()

// const obj2 = {
//   name: 'Bob',
//   age: 25
// }

// obj.greet.apply(obj2)()

  Function.prototype.applyCopy = function(context, args) {
    context.fn = this
    let result = context.fn(...args)
    delete context.fn
    return result
  }


function a() {

}

a.applyCopy(obj2, [1, 2, 3]);

