import React from 'react';
import Project5 from './Project5';

const Tab = () => {
  const tabs = [
    {
      label: "Tab 1",
      content: <div> <h1> This is content from tab One.</h1>
                      <p> You can put any content you want here. It can be text, images, or other components.</p>
               </div>
    },
    {
      label: "Tab 2",
      content: <div> <h1> This is content from tab Two.</h1>
                      <p> You can put any content you want here. It can be text, images, or other components.</p>
               </div>
    },
    {
      label: "Tab 3",
      content: <div> <h1> So you have pressed 3rd tab then you should know it's 3rd tab data!</h1>
                      <p> You can put any content you want here. It can be text, images, or other components.</p>
               </div>
    },
  ];

  const handleChange = (index) => {
    console.log("Tab changed to:", index);
  };

  return (
    <Project5 tabsContent={tabs} onChange={handleChange} />
  );
};

export default Tab;
