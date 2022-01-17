import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: "Letraset sheets containing Lorem Ipsum passages",
    },
    {
      id: 2,
      rating: 5,
      text: "release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      id: 3,
      rating: 4,
      text: "Letraset sheets containing Lorem Ipsum passages",
    },
    {
      id: 4,
      rating: 6,
      text: "release of Letraset sheets containing Lorem Ipsum passages",
    },
    {
      id: 5,
      rating: 9,
      text: "Lorem Ipsum passages",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  // Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  // Edit Feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // Update Feedback

  const updateFeedback = (id, upItem) => {
    console.log(id, upItem);

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...upItem } : item))
    );
  };

  // Delete Feedback
  const feedbackDelete = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        feedbackDelete,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
