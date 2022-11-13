import { useParams } from "react-router-dom";
import { FormComp } from "../../book/components/formComponent/FormComp";
import "./style.css";

export function CreateBookPage() {
  const { id } = useParams();
    return (
      <div className="create__book__container">
          <FormComp bookId={id}  />
      </div>
    );
  }