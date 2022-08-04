import React, { useState } from "react";
import Head from "next/head";
import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";

export default function Home() {
  const [array, setArray] = useState([
    {
      type: "header",
      inputFields: [
        { label: "Product", value: "", style: "text-sm float-left m-4" },
        { label: "Resources", value: "", style: "text-sm float-left m-4" },
        { label: "Pricing", value: "", style: "text-sm float-left m-4" },
      ],
    },
    {
      type: "hero",
      inputFields: [
        { label: "Welcome on my website", value: "", style: "text-8xl" },
        {
          label: "Deliver transparent web-readiness",
          value: "",
          style: "text-4xl mt-4 text-base text-slate-700 font-normal",
        },
      ],
    },
    {
      type: "content",
      inputFields: [
        {
          label: "Content disintermediate visionary functionalities",
          value: "",
          style: "text-4xl mt-4 font-extrabold tracking-tight text-slate-900",
        },
        {
          label:
            "We've built an innovative approach that utilizes cross-platform viral AI and machine learning to revolutionize your bullshit generating experience…",
          value: "",
          style: "mt-4 text-base leading-7 text-slate-700 font-normal",
        },
      ],
    },
    {
      type: "footer",
      inputFields: [
        {
          label: "Footer",
          value: "",
          style: "text-4xl mt-4 font-extrabold tracking-tight text-slate-900",
        },
      ],
    },
  ]);
  const [counter, setCounter] = useState(0);
  const [isEditView, setEditView] = useState(false);
  const [input, setInput] = useState(false);

  const addComponent = () => {
    array.push({
      inputFields: [
        {
          label: `New title`,
          value: "",
          style: "text-4xl mt-4 font-extrabold tracking-tight text-slate-900",
        },
        {
          label:
            "The Bullshit Generator is an innovative tool that utilizes cross-platform viral AI  bullshit generati",
          value: "",
          style: "mt-4 text-base leading-7 text-slate-700 font-normal",
        },
      ],
    });
    setCounter(counter + 1);
    setArray([...array]);
  };

  const remove = (index) => {
    array.splice(index, 1);
    setCounter(counter - 1);
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

  const moveDown = (index) => {
    if (index === array.length - 1) {
      return;
    }

    const itemAtIndex = array[index];

    array.splice(index, 1, array[index + 1]);
    array.splice(index + 1, 1, itemAtIndex);

    setArray([...array]);
  };

  const inputHandler = () => {};

  return (
    <div className="">
      <Head>
        <title>~ The Original ~</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="sticky top-0 bg-white border-b border-accent-2">
          <Button onClick={addComponent} color="black">
            Add component +
          </Button>
          <Button onClick={() => setEditView(!isEditView)}>Edit page</Button>
        </div>

        {isEditView ? (
          <div>
            {array.map((a, componentIndex) => (
              <div key={componentIndex} className="h-60 ">
                {array[componentIndex].inputFields && (
                  <Form order={componentIndex} array={array} />
                )}
                <div>
                  <Button onClick={() => moveUp(componentIndex)}>
                    Move Up ↑
                  </Button>
                  <Button onClick={() => moveDown(componentIndex)}>
                    Move Down ↓
                  </Button>
                  <Button onClick={() => remove(componentIndex)} color="red">
                    Delete -
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {array.map((a, componentIndex) => (
              <div key={componentIndex} className="w-full m-6 font-bold h-60">
                {a.inputFields &&
                  a.inputFields.map((input, index) => (
                    <div key={index} className={`${input.style}`}>
                      {input.label}
                    </div>
                  ))}
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="bg-accent-1 border-t border-accent-2">
        <div className="container mx-auto px-5">
          <div className="py-14 flex flex-col lg:flex-row items-center">
            {array.map((a, index) => (
              <div key={index}>
                {a.type === "footer" && (
                  <Input
                    type="text"
                    placeholder="Footer"
                    onChange={(e) => console.log(e.target.value)}
                    value=""
                    style="font-bold tracking-tighter leading-tight text-center"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
