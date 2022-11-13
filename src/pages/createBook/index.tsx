import { useParams } from "react-router-dom";
import { FormComp } from "../../book/components/formComponent/FormComp";

export function CreateBookPage() {
  const { id } = useParams();
    return (
      <div className="App">
          <FormComp bookId={id}  />
      </div>
    );
  }