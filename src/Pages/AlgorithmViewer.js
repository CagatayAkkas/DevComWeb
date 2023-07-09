import React, { useState } from "react";

const AlgorithmViewer = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [selectedAlgorithm, setSelectedAlgorithm] = useState("");

  const algorithms = {
    algorithm1: {
      javascript: `// JavaScript code for Algorithm 1`,
      python: `# Python code for Algorithm 1`,
      // Add more language code snippets as needed
    },
    algorithm2: {
      javascript: `// JavaScript code for Algorithm 2`,
      python: `# Python code for Algorithm 2`,
      // Add more language code snippets as needed
    },
  };

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleAlgorithmClick = (algorithm) => {
    setSelectedAlgorithm(algorithm);
  };

  const getCodeSnippet = () => {
    if (!selectedAlgorithm || !algorithms[selectedAlgorithm]) {
      return "";
    }
    return algorithms[selectedAlgorithm][selectedLanguage] || "";
  };

  return (
    <div className="algorithm-viewer">
      <div className="language-selector">
        <label htmlFor="language">Language:</label>
        <select
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <div className="algorithm-list">
        <ul>
          <li>
            <button onClick={() => handleAlgorithmClick("algorithm1")}>
              Algorithm 1
            </button>
          </li>
          <li>
            <button onClick={() => handleAlgorithmClick("algorithm2")}>
              Algorithm 2
            </button>
          </li>
          {/* Add more algorithm options as needed */}
        </ul>
      </div>
      <div className="code-viewer">
        <pre>
          <code>{getCodeSnippet()}</code>
        </pre>
      </div>
    </div>
  );
};

export default AlgorithmViewer;
