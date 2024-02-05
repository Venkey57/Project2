import React, { useInsertionEffect, useState } from 'react'

const UseInsertiuonEffectsHooks = () => {
    
  const [theme, setTheme] = useState('dark')
  
  const getStyleRule = (theme) => { 
    
    const tag = document.createElement("style");

    tag.innerHTML = ` 
    html,button {
       padding:10px;
        color:${theme === "dark" ? "white" : "black"};
        background-color:${theme === "dark" ? "black" : "white"};
        border: 1px solid ${theme === "dark" ? "white" : "black"};
       
    }
    `;
    return tag;
  };

    useInsertionEffect(() => {
        const styleRule = getStyleRule(theme);
        document.head.appendChild(styleRule)
        return ()=> document.head.removeChild(styleRule)
    },[theme])

  return (
    <div>
          {/* <h3>UseInsertiuonEffectsHooks</h3> */}
          <button onClick={()=>setTheme( theme==="dark"?"white":"dark")}>change Theme</button>
          
    </div>
  );
}



export default UseInsertiuonEffectsHooks