import React, { useState } from "react";
import Head from "next/head";
import Button from "../components/Button";
import { Form, CardForm } from "../components/Form";
import Header from "../components/Header";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Pricing from "../components/Pricing";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const headerSection = {
  type: "header",
  content: [
    {
      label: "Product",
    },
    {
      label: "Pricing",
    },
  ],
};

const addSection = (setSection) => (type) => {
  if (type === "header") {
    setSection((current) => {
      return {
        ...current,
        header: headerSection,
      };
    });
  } else if (type === "hero") {
    setSection((current) => {
      return {
        ...current,
        main: [
          ...current.main,
          {
            type: "hero",
            title: "Website.",
            text: "Deliver transparent web-readiness",
          },
        ],
      };
    });
  } else if (type === "aboutUs") {
    setSection((current) => {
      return {
        ...current,
        main: [
          ...current.main,
          {
            type: "aboutUs",
            title: "Deliver Transparent Web-readiness Generation",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid dubitas igitur mutare principia naturae? Ita multo sanguine profuso in laetitia et in victoria est mortuus. Omnia contraria, quos etiam insanos esse vultis. Hinc ceteri particulas arripere conati suam quisque videro voluit afferre sententiam. Quis non odit sordidos, vanos, leves, futtiles? Quasi ego id curem, quid ille aiat aut neget.",
          },
        ],
      };
    });
  } else if (type === "pricing") {
    setSection((current) => {
      return {
        ...current,
        main: [
          ...current.main,
          {
            type: "pricing",
            content: [
              { title: "Pricing" },
              {
                label: "Free",
                text: "The generator is an innovative tool that utilizes cross-platform viral AI generation",
              },
              {
                label: "Plan",
                text: "The generator is an innovative tool that utilizes cross-platform viral AI generation",
              },
            ],
          },
        ],
      };
    });
  } else if (type === "cards") {
    setSection((current) => {
      return {
        ...current,
        main: [
          ...current.main,
          {
            type: "cards",
            content: [
              {
                title: "Cards",
              },
              {
                label: "Card title1",
                text: "The generator is an innovative tool that utilizes cross-platform viral AI generation",
              },
              {
                label: "Card title2",
                text: "The generator is an innovative tool that utilizes cross-platform viral AI generation",
              },
            ],
          },
        ],
      };
    });
  } else if (type === "footer") {
    setSection((current) => {
      return {
        ...current,
        footer: {
          type: "footer",
          content: [
            {
              label: "Website.",
            },
            {
              label: "About",
            },
            {
              label: "Help",
            },
            {
              label: "Terms",
            },
            {
              label: "Privacy",
            },
          ],
        },
      };
    });
  }
};

const ListItem = ({ children, handleClick }) => {
  console.log(children, handleClick);
  return (
    <li className="w-full flex justify-start">
      <button
        onClick={() => handleClick()}
        className="w-full p-2 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {children}
      </button>
    </li>
  );
};

export default function Home() {
  const [content, setContentArray] = useState({
    header: null,
    main: [],
    footer: null,
  });

  const [isEditView, setEditView] = useState(false);
  const [isOpen, setIsopen] = useState(true);

  const addSectionToContent = addSection(setContentArray);

  const updateHeader = () =>
    setContentArray((current) => {
      return { ...current, header: null };
    });

  const handleEditView = () => {
    setEditView(!isEditView);
  };

  const remove = (event, index) => {
    event.preventDefault();

    const arr = [...contentArray];
    setContentArray([...arr.slice(0, index), ...arr.slice(index + 1)]);
  };

  const moveUp = (event, index) => {
    event.preventDefault();

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
    event.preventDefault();

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
    event.preventDefault();

    let arr = [...contentArray];
    let arrindexContent = arr[index].content;

    arr[index].content = [
      ...arrindexContent,
      {
        label: "Link",
      },
    ];
    setContentArray([...arr]);
  };

  const onSubmit = (index) => (event) => {
    event.preventDefault();

    let arr = [...contentArray];
    setContentArray([...arr]);
    setEditView(!isEditView);
  };

  const addCard = (index) => {
    event.preventDefault();

    let arr = [...contentArray];
    arr[index].content.push({
      label: "New Card",
      text: "New Card text",
    });

    setContentArray([...arr]);
  };

  return (
    <div>
      <Head>
        <title>~ The Original ~</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {content.header && (
          <>
            {!isEditView && <Header items={content.header.content} />}
            {isEditView && (
              <div className="space-x-2 gap-4">
                <label>Header</label>
                <Form
                  content={header.content}
                  // onSubmit={() => onSubmit(index)}
                  // onClickRemove={() => remove(index)}
                  // onAdd={() => addNavbarLink(index)}
                />
              </div>
            )}
          </>
        )}
        {content.main.map((a, index) => {
          if (a.type === "hero") {
            return (
              <div key={index} className="container mx-auto px-5 w-full">
                {!isEditView && <Hero items={a} />}
                {isEditView && (
                  <div className="my-4 space-x-2">
                    <label>Hero</label>
                    <Form
                      content={a.content}
                      onSubmit={() => onSubmit(index)}
                      onClickMoveUp={() => moveUp(index)}
                      onClickMoveDown={() => moveDown(index)}
                      onClickRemove={() => remove(index)}
                      onchangeValue={(index, newValue) => {
                        //content field with that array
                        //assign that field into separate variable
                        const field = content[index];
                        const newField = { ...field, label: newValue };
                        setContentArray([
                          ...contentArray.slice(),
                          newField,
                          contentArray.slice(),
                        ]);
                      }}
                    />
                  </div>
                )}
              </div>
            );
          } else if (a.type === "aboutUs") {
            return (
              <div key={index} className="container mx-auto px-5 w-full">
                {!isEditView && <AboutUs items={a} />}
                {isEditView && (
                  <div className="my-4 space-x-2">
                    <label>About Us</label>
                    <Form
                      content={a.content}
                      onSubmit={() => onSubmit(index)}
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
                    <CardForm
                      content={a.content}
                      onSubmit={() => onSubmit(index)}
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
                    <CardForm
                      content={a.content}
                      onSubmit={() => onSubmit(index)}
                      onClickMoveUp={() => moveUp(index)}
                      onClickMoveDown={() => moveDown(index)}
                      onAddCard={() => addCard(index)}
                      onClickRemove={() => remove(index)}
                    />
                  </div>
                )}
              </div>
            );
          }
        })}
        {content.footer && (
          <>
            {!isEditView && <Footer items={content.footer} />}
            {isEditView && (
              <div className="space-x-2 gap-4">
                <label>Footer</label>
                <Form
                  content={content.footer}
                  // onSubmit={() => onSubmit(index)}
                  // onClickRemove={() => remove(index)}
                  // onAdd={() => addNavbarLink(index)}
                />
              </div>
            )}
          </>
        )}
        <aside
          className="w-64 fixed right-0 top-0 opacity-75 py-4"
          aria-label="Sidebar"
        >
          {isOpen ? (
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-2">
                <li className="w-full flex justify-end bg-blue-900">
                  <button
                    onClick={() => setIsopen(!isOpen)}
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
                  <span className="flex items-center p-2 w-full text-base text-gray-900 transition duration-75 group  dark:text-white flex-1 text-left whitespace-nowrap">
                    Add page content:
                  </span>

                  <ul className="py-2 space-y-2">
                    <ListItem handleClick={() => addSectionToContent("hero")}>
                      Hero
                    </ListItem>
                    <ListItem
                      handleClick={() => addSectionToContent("aboutUs")}
                    >
                      About Us
                    </ListItem>
                    <ListItem
                      handleClick={() => addSectionToContent("pricing")}
                    >
                      Pricing
                    </ListItem>
                    <ListItem handleClick={() => addSectionToContent("cards")}>
                      Cards
                    </ListItem>
                  </ul>
                </li>

                {content.header ? (
                  <ListItem handleClick={() => updateHeader()}>
                    Remove Header
                  </ListItem>
                ) : (
                  <ListItem handleClick={() => addSectionToContent("header")}>
                    Header
                  </ListItem>
                )}

                {content.footer ? (
                  <ListItem
                    handleClick={() => {
                      setContentArray((current) => {
                        return { ...current, footer: null };
                      });
                    }}
                  >
                    Remove Footer
                  </ListItem>
                ) : (
                  <ListItem handleClick={() => addSectionToContent("footer")}>
                    Footer
                  </ListItem>
                )}
                {/* {contentArray.length !== 0 && (
                  <li className="border-t border-gray-200">
                    <button
                      onClick={handleEditView}
                      className="w-full flex items-center justify-start p-2 text-base text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <span className="flex-1 whitespace-nowrap">
                        Edit text
                      </span>
                    </button>
                  </li>
                )} */}
              </ul>
            </div>
          ) : (
            <button
              onClick={() => setIsopen(!isOpen)}
              type="button"
              className=" bg-gray-900 flex items-center p-2 w-full text-base text-gray-900 transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <span className="flex-1 ml-3 text-left whitespace-nowrap text-white ">
                Open Page Builder Menu
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
          )}
        </aside>
      </main>
    </div>
  );
}
