import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { AiOutlineLeft } from "react-icons/ai";
import { IoIosCopy } from "react-icons/io";
import "antd/dist/antd.css";

import ListItems from "./components/ListItems";
import "./style.css";

export default function Home() {
  const [listOfTwentyFourWords, setListOfTwentyFourWords] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchElements = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:8000/get");
      const arrayOfTwentyFourWords = _.sampleSize(response?.data, 24);
      setListOfTwentyFourWords(
        arrayOfTwentyFourWords.map((name, index) => ({
          name,
          index: index,
        }))
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchElements();
  }, []);

  return (
    <div>
      <div className="container">
        <header>
          <AiOutlineLeft />
          <span>Create New Wallet</span>
        </header>
        <div>
          <h4>Auto Gen Seed Phrase?</h4>
          <div>
            <ListItems data={listOfTwentyFourWords} />
          </div>
          <div className="text">
            <span style={{ width: "fit-content" }}>
              Tap to Copy or Carefully write down your seed phrase and store it
              in a safe place
            </span>
            <div className="icon">
              <IoIosCopy style={{ fontSize: "32px" }} />
            </div>
          </div>
        </div>
      </div>
      <footer>
        <span>How does this work?</span>
        <button>NEXT</button>
      </footer>
    </div>
  );
}
