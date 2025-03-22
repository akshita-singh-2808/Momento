function ButtonGradient({ objectName, href = "#" }) {
    return (
      <a href={href} className="bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 px-4 rounded-md transition duration-300 hover:opacity-80">
        {objectName}
      </a>
    );
  }
  
  function ButtonSimple({ objectName, href = "#" }) {
    return (
      <a href={href} className="border border-gray-500 py-2 px-4 rounded-md transition duration-300 hover:bg-gray-800 hover:text-white">
        {objectName}
      </a>
    );
  }
  
  export { ButtonGradient, ButtonSimple };
  