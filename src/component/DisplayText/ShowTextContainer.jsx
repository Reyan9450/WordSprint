import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTypedText } from "../../store/slice";
import ShowTextPresenter from "./ShowTextPresenter";

const ShowTextContainer = () => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const currentText = useSelector((state) => state.typing.text);
  const dispatch = useDispatch();

  // Utility functions for cleaning and trimming text
  const cleanText = (text) => {
    let noPunctuation = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    return noPunctuation.toLowerCase().replace(/\s{2,}/g, " ").trim();
  };

  const trimText = (text) => (text.length > 100 ? text.slice(0, 1000) : text);

  // Fetch text data from the API
  const fetchData = async () => {
    try {
      setLoading(true);
      const data = await fetch("https://baconipsum.com/api/?type=all-meat&paras=1&format=text");

      if (data.ok) {
        const textData = trimText(cleanText(await data.text()));
        setText(textData);

        // Only dispatch if the text is different from the currentText
        if (textData !== currentText) {
          dispatch(setTypedText(textData));
        }
      } else {
        setError("Something went wrong while fetching the text.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // UseEffect with a guard to prevent infinite loop
  useEffect(() => {
    if (!currentText) {
      fetchData(); // Only fetch if currentText is empty
    }
  }, [currentText]); // Depend on currentText

  // Pass data and state to the presenter
  return <ShowTextPresenter text={text} loading={loading} error={error} />;
};

export default ShowTextContainer;
