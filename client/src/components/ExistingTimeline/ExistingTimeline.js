import React from "react";
import styles from "./ExistingTimeline.module.css";

const ExistingTimeline = ({ handleCheck, memoryStatus }) => {
  const Code = () => {
    return (
      <div className={styles.code}>
        <label for="code">
          <h4>Code</h4>
        </label>
        <div className={styles.test1}>
          <input
            placeholder="Code"
            type="code"
            id="code"
            name="code"
            required
          />
          <button>Apply Code</button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.existing}>
      <div className={styles.check}>
        <input
          type="checkbox"
          id="existing-tree"
          name="existing-tree"
          value="tick"
          onClick={handleCheck}
        />
        <label for="existing-tree">I have a code to join a memory</label>
      </div>
      {memoryStatus && <Code />}
    </div>
  );
};

export default ExistingTimeline;
