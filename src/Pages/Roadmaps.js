import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Roadmaps() {
  const topics = [
    {
      title: "Array",
      links: [
        {
          title: "#1 - Two of Sum",
          url: "https://www.youtube.com/watch?v=z4ORRdgWuB4",
        },
        {
          title: "#33 - Search in Rotated Sorted Array",
          url: "https://www.youtube.com/watch?v=yl6al9ib91c",
        },
        {
          title: "#238 - Product of Array Except Self",
          url: "https://www.youtube.com/watch?v=m0E9LKiP4uw",
        },
        {
          title: "#21 - Trapping Rain Water",
          url: "https://www.youtube.com/watch?v=tfvJ8GpJpss",
        },
        {
          title:
            "#105 - Construct Binary Tree From Preorder and Inorder Traversal",
          url: "https://www.youtube.com/watch?v=9sIQloyS-vM",
        },
      ],
    },
    {
      title: "Binary",
      links: [
        {
          title: "#338 - Counting Bits",
          url: "https://www.youtube.com/watch?v=YtwJK1qI4Yc",
        },
        {
          title: "#21,33 - Merge K/Two Sorted Lists",
          url: "https://www.youtube.com/watch?v=lUfMRjTY-BQ",
        },
        {
          title: "#704 - Binary Search",
          url: "https://www.youtube.com/watch?v=XucsJck43s8",
        },
      ],
    },
    {
      title: "String",
      links: [
        {
          title: "#125 - Valid Palindrome",
          url: "https://www.youtube.com/watch?v=l7E0Dl2M5gs",
        },
        {
          title: "#647 - Palindrome Substrings",
          url: "https://www.youtube.com/watch?v=6iypO-yjIAI",
        },
        {
          title: "#424 - Longest Repeating Character Replacement",
          url: "https://www.youtube.com/watch?v=218B7S07088",
        },
      ],
    },
    {
      title: "Linked List",
      links: [
        {
          title: "#206 - Reverse Linked List",
          url: "https://www.youtube.com/watch?v=hQza6dYI2AM",
        },
        {
          title: "#19 - Remove Nth Node From End of List",
          url: "https://www.youtube.com/watch?v=nBfliKBIQeU",
        },
        {
          title: "#141 - Linked List Cycle",
          url: "https://www.youtube.com/watch?v=4pf97Lo_w-Q",
        },
      ],
    },
    {
      title: "Binary Tree",
      links: [
        {
          title: "#104 - Maximum Depth of Binary Tree",
          url: "https://www.youtube.com/watch?v=Ww0YFz9_V2s",
        },
        {
          title: "#102 - Binary Tree Level Order Traversal",
          url: "https://www.youtube.com/watch?v=CplPd_M-sAw",
        },
        {
          title: "#572 - Subtree of Another Tree",
          url: "https://www.youtube.com/watch?v=kowYAx-LEIg",
        },
      ],
    },
    {
      title: "Dynamic Programming",
      links: [
        {
          title: "#300 - Longest Increasing Subsequence",
          url: "https://www.youtube.com/watch?v=AJkBMCh7B0k",
        },
        {
          title: "#139 - Word Break",
          url: "https://www.youtube.com/watch?v=GDTWoIR9BNU",
        },
        {
          title: "#70 - Climbing Stairs",
          url: "https://www.youtube.com/watch?v=8dQbsakGXpI",
        },
        {
          title: "#198,213 - House Robber I ve II",
          url: "https://www.youtube.com/watch?v=S7W_bK0Ch20",
        },
      ],
    },
    {
      title: "Matrix",
      links: [
        {
          title: "#54 - Spiral Matrix",
          url: "https://www.youtube.com/watch?v=VRKlggqMhuA",
        },
      ],
    },
    {
      title: "Interval",
      links: [
        {
          title: "#56 - Merge Intervals",
          url: "https://www.youtube.com/watch?v=VcHMax6Pat8",
        },
      ],
    },
    {
      title: "Graph",
      links: [
        {
          title: "#547 - Number of Provinces",
          url: "https://www.youtube.com/watch?v=FJ1NnLkddKw",
        },
      ],
    },
    {
      title: "Heap",
      links: [
        {
          title: "#1046 - Last Stone Weight",
          url: "https://www.youtube.com/watch?v=iRvguQZMess",
        },
      ],
    },
  ];

  const history = useHistory();
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
    history.push(`/Roadmaps/${topic.title}`);
  };

  const handleBackgroundClick = () => {
    setSelectedTopic(null);
    history.push("/Roadmaps");
  };

  return (
    <section className="roadmaps section">
      <div className="title">
        <h2>Roadmaps</h2>
        <div className="underline"></div>
      </div>
      <VerticalTimeline>
        {topics.map((topic, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            onClick={() => handleTopicClick(topic)}
          >
            <h3 className="vertical-timeline-element-title">{topic.title}</h3>
            <ul>
              {topic.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {selectedTopic && (
        <div className="topic-details">
          <h3>{selectedTopic.title}</h3>
          <ul>
            {selectedTopic.links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {selectedTopic && (
        <div
          className="background-overlay"
          onClick={handleBackgroundClick}
        ></div>
      )}
    </section>
  );
}

export default Roadmaps;
