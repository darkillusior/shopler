import React, { useEffect, useId, useState } from "react";
import { List, Image, Search } from "semantic-ui-react";
import axios from "axios";
import cookie from "js-cookie";
import Router from "next/router";
import baseUrl from "../../utils/baseUrl";
let controller = null;


function SearchComponent({userId}) {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const handleChange = async e => {
    
    const { value } = e.target;
    setText(value);

    if (value.length === 0) return;
    if (value.trim().length === 0) return;

    setText(value);
    setLoading(true);

    try {
      if (controller) controller.abort();
      controller = new AbortController();
      const token = cookie.get("token");

      const res = await axios.get(`${baseUrl}/api/search/${value}/${userId}`, {
        headers: { Authorization: token },
        signal: controller.signal,
        
      });

      if (res.data.length === 0) {
        results.length > 0 && setResults([]);

        return setLoading(false);
      }
      console.log(res.data)
      setResults(res.data);
    } catch (error) {
      console.log(error);
    }
    controller = null;
    setLoading(false);
  };

  useEffect(() => {
    if (text.length === 0 && loading) setLoading(false);
  }, [text]);

  return (
    <div className="pt-4">
    <Search
      onBlur={() => {
        results.length > 0 && setResults([]);
        loading && setLoading(false);
        setText("");
      }}
      loading={loading}
      value={text}
      resultRenderer={ResultRenderer}
      results={results}
      onSearchChange={handleChange}
      minCharacters={1}
    
    /></div>
  );
}

const ResultRenderer = ({ name }) => {
  return (
    <List >
      <List.Item>
      
        <List.Content header={name} as="a" />
      </List.Item>
    </List>
  );
};

export default SearchComponent;
