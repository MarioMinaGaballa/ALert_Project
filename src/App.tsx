import "./App.css";
import {
  Ban,
  CheckCheck,
  OctagonAlert,
  LibraryBig,
  ShieldCheck,
} from "lucide-react";
import Alert from "./componat/Alert/Alert";

function App() {
  return (
    <>
      <Alert type="alert-danger" headerIcon={<Ban size={25} />} title="Wrong" >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem veritatis ducimus magnam neque. Ad maiores odit
          perferendis? Quia, mollitia reprehenderit!
        </p>
      </Alert>

      <Alert
        type="alert-default"
        headerIcon={<ShieldCheck size={25} />}
        title="Default"
        description={
          "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda quasi aliquid ut!"
        }
      />

      <Alert
        type="alert-info"
        headerIcon={<LibraryBig size={25} />}
        title="Note"
        description={
          "lease note that your changes have been saved successfully.If you need any further assistance, don't hesitate to reach out to our support team. Thank you for using our service!"
        }
      />

      <Alert
        type="alert-warning"
        headerIcon={<OctagonAlert size={25} />}
        title="Warning"
        description={
          " Unsaved changes will be lost. Please save your work before leavingthe page."
        }
      />

      <Alert
        type="alert-success"
        headerIcon={<CheckCheck size={25} />}
        title="Success"
        description={
    "Your action was completed successfully. Thank you for using our service."
        
        }
      />
    </>
  );
}

export default App;
