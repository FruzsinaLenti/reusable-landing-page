import React, { useState } from "react";
import Head from "next/head";
import Button from "../components/Button";
import { Form, NavForm, InlineEdit } from "../components/Form";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Pricing from "../components/Pricing";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

export default function Home() {
  const [contentArray, setContentArray] = useState([]);
  const [isEditView, setEditView] = useState(false);
  const [hasFooter, setFooter] = useState(false);
  const [isOpen, setIsopen] = useState(true);

  const toggleSidebar = () => {
    setIsopen(!isOpen);
  };

  const addSection = (type) => {
    let arr = [...contentArray];

    if (type === "navbar") {
      setContentArray([
        {
          type: "navbar",
          content: [
            {
              label: "Product",
            },
            {
              label: "Pricing",
            },
          ],
        },
        ...contentArray,
      ]);
    } else if (type === "hero") {
      setContentArray([
        ...contentArray,
        {
          type: "hero",
          content: [
            {
              label: "Website.",
            },
            {
              label: "Deliver transparent web-readiness",
            },
          ],
        },
      ]);
    } else if (type === "aboutUs") {
      setContentArray([
        ...contentArray,
        {
          type: "aboutUs",
          content: [
            {
              label: "Deliver Transparent Web-readiness Generation",
            },
            {
              label:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuso in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.",
            },
          ],
        },
      ]);
    } else if (type === "pricing") {
      setContentArray([
        ...contentArray,
        {
          type: "pricing",
          content: [
            { label: "Free" },
            {
              label:
                "The generator is an innovative tool that utilizes cross-platform viral AI generation",
            },
            {
              label: "Plan",
            },
            {
              label:
                "The generator is an innovative tool that utilizes cross-platform viral AI generation",
            },
          ],
        },
      ]);
    } else if (type === "cards") {
      setContentArray([
        ...contentArray,
        {
          type: "cards",
          content: [
            {
              title: "Card title",
              text: "The generator is an innovative tool that utilizes cross-platform viral AI generation",
            },
            {
              title: "Card title",
              text: "The generator is an innovative tool that utilizes cross-platform viral AI generation",
            },
          ],
        },
      ]);
    }
    // else if (type === "footer") {
    //   setContentArray([
    //     ...contentArray,
    //     {
    //       type: "footer",
    //       content: [
    //         {
    //           label: "About",
    //         },
    //         {
    //           label: "Help",
    //         },
    //         {
    //           label: "Terms",
    //         },
    //         {
    //           label: "Privacy",
    //         },
    //       ],
    //     },
    //   ]);
    // }
    else {
      arr.push({
        type: "content",
        content: [
          {
            label: "New title",
          },
          {
            label:
              "The generator is an innovative tool that utilizes cross-platform viral AI generation",
          },
        ],
      });
      setContentArray([...arr]);
    }
  };

  const handleEditView = () => {
    setContentArray([...contentArray]);
    setEditView(!isEditView);
  };

  const remove = (index) => {
    // contentArray.splice(index, 1);
    // setContentArray([...contentArray]);

    const arr = [...contentArray];
    setContentArray([...arr.slice(0, index), ...arr.slice(index + 1)]);
  };

  const moveUp = (index) => {
    if (index === 0) {
      return;
    }

    const itemAtIndex = contentArray[index];
    const arr = [...contentArray];

    arr.splice(index, 1, arr[index - 1]);
    arr.splice(index - 1, 1, itemAtIndex);

    setContentArray([...arr]);
  };

  const moveDown = (index) => {
    if (index === contentArray.length - 1) {
      return;
    }
    const itemAtIndex = contentArray[index];
    const arr = [...contentArray];

    arr.splice(index, 1, arr[index + 1]);
    arr.splice(index + 1, 1, itemAtIndex);

    setContentArray([...arr]);
  };

  const addNavbarLink = (index) => {
    let arr = [...contentArray];

    arr[index].content.push({
      label: "Link",
    });

    setContentArray([...arr]);
  };

  // const addFooterLink = () => {
  //   // let arr = [...contentArray];
  //   // arr[arr.length - 1].content.push({
  //   //   label: "Link",
  //   // });
  //   // setContentArray([...arr]);
  //   // setFooter(true);
  // };

  const getNavbar = () => {
    const newArr = contentArray.find((content) => content.type === "navbar");

    return newArr;
  };

  // const getFooter = () => {
  //   const newArr = contentArray.find((content) => content.type === "footer");

  //   return newArr;
  // };

  const onSubmitNav = (index) => (message) => {
    let arr = [...contentArray];
    arr[index].content = [...message];
    setContentArray([...arr]);
    setEditView(!isEditView);
  };

  // const onSubmitFooter = (index) => (message) => {
  //   console.log("onSubmitFooter", index);
  //   setFooter(true);

  //   let arr = [...contentArray];

  //   // arr[arr.length - 1].content = [...message];
  //   // setContentArray([...arr]);
  //   // setEditView(!isEditView);
  // };

  const onSubmitAboutUs = (index) => (message) => {
    let arr = [...contentArray];

    arr[index].content = [...message];

    setContentArray([...arr]);

    setEditView(!isEditView);
  };

  const addCard = (index) => {
    let arr = [...contentArray];
    arr[index].content.push({
      title: "New Card",
      text: "New Card text",
    });

    console.log("");
    setContentArray([...arr]);
  };

  const onSubmitCards = (index) => (message) => {
    let arr = [...contentArray];
    arr[index].content = [...message];
    setContentArray([...arr]);
    setEditView(!isEditView);
  };

  const onSubmitPricing = (index) => (message) => {
    let arr = [...contentArray];
    arr[index].content = [...message];
    setContentArray([...arr]);
    setEditView(!isEditView);
  };

  return (
    <div>
      <Head>
        <title>~ The Original ~</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {contentArray.map((a, index) => {
          if (a.type === "navbar") {
            return (
              <div key={index}>
                {!isEditView && <Navbar items={a.content} />}
                {getNavbar() && isEditView && (
                  <div className="space-x-2 gap-4">
                    <label>Navbar</label>
                    <Form
                      content={getNavbar().content}
                      onSubmit={onSubmitNav(index)}
                      onClickRemove={() => remove(index)}
                      onAdd={() => addNavbarLink(index)}
                    />
                  </div>
                )}
              </div>
            );
          } else if (a.type === "hero") {
            return (
              <div key={index} className="container mx-auto px-5 w-full">
                {!isEditView && <Hero items={a.content} />}
                {isEditView && (
                  <div className="my-4 space-x-2">
                    <label>Hero</label>
                    <Form
                      content={contentArray[index].content}
                      onSubmit={onSubmitNav(index)}
                      onClickMoveUp={() => moveUp(index)}
                      onClickMoveDown={() => moveDown(index)}
                      onClickRemove={() => remove(index)}
                    />
                  </div>
                )}
              </div>
            );
          } else if (a.type === "aboutUs") {
            return (
              <div key={index} className="container mx-auto px-5 w-full">
                {!isEditView && <AboutUs items={a.content} />}
                {isEditView && (
                  <div className="my-4 space-x-2">
                    <label>About Us</label>
                    <Form
                      content={contentArray[index].content}
                      onSubmit={onSubmitAboutUs(index)}
                      onClickMoveUp={() => moveUp(index)}
                      onClickMoveDown={() => moveDown(index)}
                      onClickRemove={() => remove(index)}
                    />
                  </div>
                )}
              </div>
            );
          } else if (a.type === "pricing") {
            return (
              <div key={index} className="w-full container mx-auto px-5">
                {!isEditView && <Pricing items={a.content} />}
                {isEditView && (
                  <div className="my-4 space-x-2">
                    <label>Pricing</label>
                    <Form
                      content={contentArray[index].content}
                      onSubmit={onSubmitPricing(index)}
                      onClickMoveUp={() => moveUp(index)}
                      onClickMoveDown={() => moveDown(index)}
                      onClickRemove={() => remove(index)}
                    />
                  </div>
                )}
              </div>
            );
          } else if (a.type === "cards") {
            return (
              <div key={index} className="w-full container mx-auto px-5">
                {!isEditView && <Cards items={a.content} />}
                {isEditView && (
                  <div className="my-4 space-x-2">
                    <label>Cards</label>
                    <Form
                      content={contentArray[index].content}
                      onSubmit={onSubmitCards(index)}
                      onClickMoveUp={() => moveUp(index)}
                      onClickMoveDown={() => moveDown(index)}
                      onAddCard={() => addCard(index)}
                      onClickRemove={() => remove(index)}
                    />
                  </div>
                )}
              </div>
            );
          } else {
            return (
              <div key={index} className={` w-full px-6`}>
                {contentArray[index].inputFields && (
                  <Form
                    order={index}
                    content={contentArray}
                    isEditView={isEditView}
                  />
                )}
                {isEditView && (
                  <div className="absolute z-10 right-0 space-x-2">
                    <Button onClick={() => moveUp(index)}>↑</Button>
                    <Button onClick={() => moveDown(index)}>↓</Button>
                    <Button onClick={() => remove(index)}>X</Button>
                  </div>
                )}
              </div>
            );
          }
        })}
        {/* {!isEditView && <Footer items={getFooter().content} />}
        {isEditView && (
          <div className="space-x-2 gap-4">
            <label>Footer</label>
            <Form
              content={getFooter.content}
              onSubmit={() => onSubmitFooter(contentArray.length - 1)}
              onClickRemove={() => remove(contentArray.length - 1)}
              onAdd={() => addFooterLink(contentArray.length - 1)}
            />
          </div>
        )} */}
        <aside
          className="w-64 fixed right-0 top-0 opacity-75 py-4"
          aria-label="Sidebar"
        >
          {isOpen ? (
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-2">
                <li className="w-full flex justify-end bg-blue-900">
                  <button
                    onClick={toggleSidebar}
                    type="button"
                    className="flex items-center p-2 w-full text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <span className="flex-1 text-left whitespace-nowrap">
                      Page Builder Menu
                    </span>

                    <span className="sr-only">Close</span>
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleEditView}
                    type="button"
                    className="flex items-center p-2 w-full text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    <span className="flex-1 text-left whitespace-nowrap">
                      Add page content
                    </span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                  {!isEditView && (
                    <ul className="py-2 space-y-2">
                      <li>
                        <button
                          onClick={() => addSection("hero")}
                          className="flex items-center p-2 pl-11 w-full text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Hero
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => addSection("aboutUs")}
                          className="flex items-center p-2 pl-11 w-full text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          About Us
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => addSection("pricing")}
                          className="flex items-center p-2 pl-11 w-full text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Pricing
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => addSection("cards")}
                          className="flex items-center p-2 pl-11 w-full text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        >
                          Cards
                        </button>
                      </li>
                    </ul>
                  )}
                </li>

                {contentArray.findIndex(
                  (content) => content.type === "navbar"
                ) === -1 && (
                  <li className="w-full flex justify-start">
                    <button
                      onClick={() => addSection("navbar")}
                      className="w-full p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Navbar
                    </button>
                  </li>
                )}
                {/* {!hasFooter && (
                  <li className="w-full flex justify-start">
                    <button
                      // onClick={() => setFooter(true)}
                      onClick={() => addSection("footer")}
                      className="w-full p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Footer
                    </button>
                  </li>
                )} */}
                {contentArray.length !== 0 && (
                  <li className="border-t border-gray-200">
                    <button
                      onClick={handleEditView}
                      className="w-full flex items-center justify-start p-2 text-base text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="flex-1 whitespace-nowrap">Edit</span>
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ) : (
            <button
              onClick={toggleSidebar}
              type="button"
              className=" bg-gray-900 flex items-center p-2 w-full text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              aria-controls="dropdown-example"
              data-collapse-toggle="dropdown-example"
            >
              <span className="flex-1 ml-3 text-left whitespace-nowrap text-white ">
                Open Page Builder Menu
              </span>
              <svg
                sidebar-toggle-item
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          )}
        </aside>
      </main>
    </div>
  );
}
