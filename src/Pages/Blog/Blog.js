import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 gap-8 mx-4 md:mx-16'>
            <div className='card bg-base-100 shadow-xl  p-4  md:p-16'>
                <h2 className='text-3xl my-2'>What are the different ways to manage a state in a React application?</h2>
                <p> Not only are there are a lot of different kinds of state, but there often dozens of ways of managing each kind. Which should you choose?

                    In this guide, we will uncover the several kinds of state in your React apps that you might not be aware of, plus how to manage them in the most effective way.With React, you won’t modify the UI from code directly. For example, you won’t write commands like “disable the button”, “enable the button”, “show the success message”, etc. Instead, you will describe the UI you want to see for the different visual states of your component (“initial state”, “typing state”, “success state”), and then trigger the state changes in response to user input. This is similar to how designers think about UI.

                    Here is a quiz form built using React. Note how it uses the status state variable to determine whether to enable or disable the submit button, and whether to show the success message instead.</p>
            </div>
            <div className='card bg-base-100 shadow-xl  p-4  md:p-16'>
                <h2 className='text-3xl my-2'>
                    How does prototypical inheritance work?
                </h2>
                <p>
                    In programming, we often want to take something and extend it.

                    For instance, we have a user object with its properties and methods, and want to make admin and guest as slightly modified variants of it. We’d like to reuse what we have in user, not copy/reimplement its methods, just build a new object on top of it.

                    Prototypal inheritance is a language feature that helps in that.When we read a property from object, and it’s missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. And soon we’ll study many examples of such inheritance, as well as cooler language features built upon it.

                    The property [[Prototype]] is internal and hidden, but there are many ways to set it.
                </p>
            </div>
            <div className='card bg-base-100 shadow-xl  p-4  md:p-16'>
                <h2 className='text-3xl my-2'>
                    What is a unit test? Why should we write unit tests?
                </h2>
                <p>
                    1.  A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."
                    <br />
                    2. To justify any effort in business, there must be a positive impact on the bottom line. Here are a few benefits to writing unit tests:

                    Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.
                    Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
                    It simplifies the debugging process.
                    Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                    Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.
                </p>
            </div>
            <div className='card bg-base-100 shadow-xl  p-4  md:p-16'>
                <h2 className='text-3xl my-2'>
                    React vs. Angular vs. Vue?
                </h2>
                <p>
                    <strong>Angular: </strong> developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                    <br />
                    <strong>Vue: </strong> also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.
                    <br />
                    <strong>React: </strong> developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue,
                    React often requires extra modules and components, which keeps the core library small, but means there’s extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn’t require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                </p>
            </div>

        </div>
    );
};

export default Blog;