import React, { useState } from "react";
import Button from "../../atoms/button";
import TextInput from "../../atoms/textInput";

import styles from "./postsearch.module.scss";

export default function PostSearch({ onSearch }: { onSearch: () => void }) {
  const [search, setSearch] = useState("");
  const [searchType, setSearchType] = useState<"article" | "tag">("article");
  const handleTextInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };
  const handleChangeSearchType = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = target;
    if (id !== "article" && id !== "tag") return;
    setSearchType(id);
  };

  return (
    <div>
      <section className={styles.radioButtonWrapper}>
        <div className={styles.labelButtonPair}>
          <input
            onChange={handleChangeSearchType}
            type="radio"
            id="tag"
            value="tag"
            checked={searchType === "tag"}
          />
          <label htmlFor="tag">BY TAG</label>
        </div>
        <div className={styles.labelButtonPair}>
          <input
            onChange={handleChangeSearchType}
            type="radio"
            id="article"
            value="article"
            checked={searchType === "article"}
          />
          <label htmlFor="article">BY ARTICLE</label>
        </div>
      </section>
      <TextInput
        placeholder={searchType}
        value={search}
        onChange={handleTextInput}
        style={{ width: "20rem" }}
      />
      <Button variant="primary" onClick={onSearch}>
        Search
      </Button>
    </div>
  );
}
