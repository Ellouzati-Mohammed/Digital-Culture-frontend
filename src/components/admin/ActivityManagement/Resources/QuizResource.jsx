import { Box } from "@mui/material";
import { NormalInput, SelectInput } from "../../../ValidationInputs";

const QuizResource = ({ data, errors, onChange, onOptionChange }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <NormalInput
        label="Quiz Question"
        placeholder="Ex : Quel est le rôle des cookies"
        name="quizQuestion"
        value={data.quizQuestion}
        setValue={onChange}
        error={errors?.quizQuestion}
      />
      
      <Box sx={{ border: 'solid 1px #CBD5E1', borderRadius: 2, p: 2 }}>
        {data.quizOptions.map((option, index) => (
          <NormalInput
            key={`quiz-option-${index}`}
            label={`Réponse ${index + 1}`}
            placeholder="Ex : Une option de réponse"
            value={option}
            setValue={(e) => onOptionChange(e, index)}
            error={errors?.quizOptions?.[index]}
          />
        ))}
        
        <SelectInput
          label="Choisir la réponse correcte"
          name="quizCorrectAnswer"
          value={data.quizCorrectAnswer}
          setValue={onChange}
          options={data.quizOptions
            .filter(opt => opt.trim())
            .map((opt, index) => ({ 
              value: opt, 
              label: opt || `Option ${index + 1}` 
            }))}
          error={errors?.quizCorrectAnswer}
        />
      </Box>
    </Box>
  );
};

export default QuizResource;