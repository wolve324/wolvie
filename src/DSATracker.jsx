// DSATracker.jsx
import React, { useState } from 'react';

const DSATracker = () => {
    const [activeTopic, setActiveTopic] = useState(null);

    const topics = [
        {
            name: "Arrays",
            subtopics: [
                "Basics of Arrays: Traversal, Insertion, Deletion",
                "Sorting Algorithms: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort",
                "Searching Algorithms: Linear Search, Binary Search",
                "Two Pointer Technique: Sliding window, finding pairs, and subarrays",
                "Prefix Sum Arrays: Calculating sum in range",
                "Kadane's Algorithm: Maximum subarray sum (Dynamic Programming concept)"
            ],
        },
        {
            name: "Strings",
            subtopics: [
                "Basics: Traversing, searching, string comparison",
                "String Matching Algorithms: KMP, Rabin-Karp",
                "Anagram and Palindrome checks",
                "Sliding Window: Longest substring without repeating characters",
                "Substring Problems: Longest common substring"
            ],
        },
        // Add more topics as needed
    ];

    const toggleTopic = (index) => {
        setActiveTopic(activeTopic === index ? null : index);
    };

    return (
        <div className="dsa-tracker">
            <h2>DSA Tracker</h2>
            <div className="accordion">
                {topics.map((topic, index) => (
                    <div className="accordion-item" key={index}>
                        <button className="accordion-header" onClick={() => toggleTopic(index)}>
                            {topic.name}
                        </button>
                        {activeTopic === index && (
                            <div className="accordion-content">
                                <ul>
                                    {topic.subtopics.map((subtopic, idx) => (
                                        <li key={idx}>
                                            <input type="checkbox" id={`subtopic-${index}-${idx}`} />
                                            <label htmlFor={`subtopic-${index}-${idx}`}>{subtopic}</label>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DSATracker;
