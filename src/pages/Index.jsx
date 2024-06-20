import { Container, Text, VStack, Textarea, Select, Button, Box } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [feedback, setFeedback] = useState("");
  const [genre, setGenre] = useState("argumentative");

  const handleSubmit = () => {
    // Placeholder for feedback generation logic
    setFeedback(`Feedback for ${genre} genre: ...`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Box width="100%">
          <Text mb={2}>Text input box</Text>
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Enter your school homework text here..."
            size="md"
            height="200px"
          />
        </Box>
        <Box width="100%">
          <Text mb={2}>Feedback output box</Text>
          <Textarea
            value={feedback}
            isReadOnly
            placeholder="Feedback will be displayed here..."
            size="md"
            height="200px"
          />
        </Box>
        <Box width="100%">
          <Text mb={2}>Genre dropdown selector</Text>
          <Select value={genre} onChange={(e) => setGenre(e.target.value)} placeholder="Select genre">
            <option value="argumentative">Argumentative</option>
            <option value="descriptive">Descriptive</option>
            <option value="essay">Essay</option>
            <option value="instruction">Instruction</option>
          </Select>
        </Box>
        <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default Index;