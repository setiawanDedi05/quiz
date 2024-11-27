import { useEffect, useState } from "react";
import { Alert } from "react-native";

export type Quiz = {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  choises: string[];
};

const useQuiz = () => {
  const [quizData, setQuizData] = useState<Quiz[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);

    try {
      const result = await fetch(
        "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple"
      );
      const response = await result.json();
      setQuizData(
        response.results.map((item: Quiz) => {
          item.choises = [...item?.incorrect_answers];
          item.choises.splice(Math.floor(Math.random() * 4), 0, item.correct_answer);
          return item;
        })
      );
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const refetch = () => fetchData();

  useEffect(() => {
    fetchData();
  }, []);

  return { quizData, isLoading, refetch };
};

export default useQuiz;
