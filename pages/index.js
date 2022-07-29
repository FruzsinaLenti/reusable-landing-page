import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";

export default function Home() {
  const [array, setArray] = useState([
    { text: "Hello I'm the 1st component" },
    { text: "Hello I'm the 2nd component" },
    { text: "Hello I'm the 3rd component" },
  ]);
  const [counter, setCounter] = useState(0);

  const addComponent = () => {
    array.push({ text: `added component ${counter}` });
    setArray([...array]);
    setCounter(counter + 1);
  };

  const remove = (index) => {
    array.splice(index, 1);
    setArray([...array]);
  };

  const moveUp = (index) => {
    if (index === 0) {
      return;
    }

    const itemAtIndex = array[index];

    array.splice(index, 1, array[index - 1]);
    array.splice(index - 1, 1, itemAtIndex);

    setArray([...array]);
  };

  // const moveUp = (index) => {
  //   if (index === 0) {
  //     return;
  //   }
  //   [array[index], array[index - 1]] = [array[index - 1], array[index]];
  //   console.log(array);
  //   setArray([...array]);
  // };

  const moveDown = (index) => {
    if (index === array.length - 1) {
      return;
    }

    const itemAtIndex = array[index];
    // const itemAtIndexPlusOne = array[index + 1];

    array.splice(index, 1, array[index + 1]);
    array.splice(index + 1, 1, itemAtIndex);

    console.log(array, "down");
    setArray([...array]);
  };

  // move down button with Array.prototype functions
  // add component some fields that I can edit e.g. title, subtitle
  // type of the component
  // push it to the repo

  return (
    <div className={styles.container}>
      <Head>
        <title>Reusable landing page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className="p-8">
          <button
            className="flex sm:inline-flex justify-center items-center bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 px-5 py-2"
            onClick={addComponent}
          >
            + Add component +
          </button>
        </div>

        <div>
          {array.map((a, index) => (
            <div key={index} className="m-6 font-bold">
              <p className="text-2xl">{a.text}</p>

              <Button onClick={() => moveUp(index)}> Move Up ↑</Button>
              <Button onClick={() => moveDown(index)}>Move Down ↓</Button>
              <Button onClick={() => remove(index)}>- Delete -</Button>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
