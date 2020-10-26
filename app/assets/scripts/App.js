import "../styles/styles.css";
import AlgorithmContainer from "./modules/AlgorithmContainer";

new AlgorithmContainer();

if (module.hot) {
  module.hot.accept();
}
