import PipelineToolbar from './components/toolbar/toolbar';
import PipelineUI from './components/ui';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden">
      <PipelineToolbar />
      <PipelineUI />
    </div>
  );
}

export default App;
