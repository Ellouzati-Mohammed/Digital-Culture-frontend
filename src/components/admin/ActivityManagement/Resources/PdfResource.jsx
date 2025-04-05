import { NormalInput } from "../../../ValidationInputs";

const PdfResource = ({ data, errors, onChange }) => {
  return (
    <>
      <NormalInput
        label="Pdf Title"
        placeholder="Ex : JavaScript cookies"
        name="pdfTitle"
        value={data.pdfTitle}
        setValue={onChange}
        error={errors?.pdfTitle}
      />
      <NormalInput
        label="Url Pdf"
        placeholder="Ex : "
        name="pdfUrl"
        value={data.pdfUrl}
        setValue={onChange}
        error={errors?.pdfUrl}
      />
    </>
  );
};

export default PdfResource;