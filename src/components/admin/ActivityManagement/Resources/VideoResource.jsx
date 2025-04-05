import { NormalInput } from "../../../ValidationInputs";

const VideoResource = ({ data, errors, onChange }) => {
  return (
    <NormalInput
      label="Url video"
      placeholder="Ex : Machine Learning"
      name="videoUrl"
      value={data.videoUrl}
      setValue={onChange}
      error={errors?.videoUrl}
    />
  );
};

export default VideoResource;