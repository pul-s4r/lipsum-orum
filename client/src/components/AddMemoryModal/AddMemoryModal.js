import React from "react";
import styles from "./AddMemoryModal.module.css";
import Modal from "../UI/Modal";

const AddMemoryModal = (props) => {
  const navigateToTimeline = () => navigateToTimeline("/timeline");

  return (
    <Modal onClose={props.onClose}>
      <form>
        <div className={styles.content}>
          <div className={styles.column}>
            <h2>
              <strong>Add a memory</strong>
            </h2>
          </div>

          <div className={styles.first_row}>
            <div className={styles.column_1}>
              <label for="title">
                <strong>Title</strong>
                <small className={styles.smallText}> (50 characters)</small>
              </label>
              <input maxlength="50" id="title" type="text" name="title"></input>
            </div>
            <div className={styles.column_2}>
              <label for="date">
                <strong>Date</strong>
              </label>
              <input id="date" type="date" name="date" />
            </div>
          </div>
          <div className={styles.second_row}>
            <div className={styles.column_1}>
              <div className={styles.inner_row_1}>
                <label id="description_label" for="description">
                  <strong>Description</strong>
                  <small className={styles.smallText}>
                    <strong> (100 characters)</strong>
                  </small>
                </label>
              </div>
              <textarea maxlength="100" id="description_input"></textarea>
            </div>
            <div className={styles.column_2}>
              <div className={styles.inner_row_1}>
                <label for="image">
                  <strong>Upload</strong>
                </label>
                <small className={styles.smallText}>
                  <strong>Image (Max 5mb .png .jpg)</strong>
                </small>
              </div>
              <input
                id="image"
                accept=".png, .jpeg, .jpg"
                type="file"
                name="image"
              ></input>
            </div>
          </div>
          <div className={styles.column}>
            <label for="tags">
              <strong>
                Tags <small className={styles.smallText}>(max.10)</small>
              </strong>
            </label>
            <input
              id="tags"
              type="text"
              name="tags"
              placeholder="Add tags"
            ></input>
          </div>
          <div className={styles.column}>
            <label id="video" for="video">
              <strong>Embed Video</strong>
            </label>
            <input
              id="video"
              type="file"
              name="video"
              placeholder="Add tags"
              accept="video/mp4,video/x-m4v,video/*"
            ></input>
          </div>
          <div className={styles.buttons}>
            <button>Post</button>
            <button onClick={props.onClose}>Cancel</button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddMemoryModal;
