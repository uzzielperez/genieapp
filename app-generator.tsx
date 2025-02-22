import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, Code2, Loader2, Layout } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const AppGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [previewApp, setPreviewApp] = useState(null);

  const generateApplication = async () => {
    setLoading(true);
    setError('');
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockGeneratedCode = `
import React, { useState } from 'react';

const GeneratedApp = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className={\`p-6 \${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}\`}>
      <h1 className="text-2xl font-bold mb-4">
        Interactive App: "{prompt}"
      </h1>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button onClick={() => setCount(c => c - 1)}>-</Button>
          <span className="text-xl">{count}</span>
          <Button onClick={() => setCount(c => c + 1)}>+</Button>
        </div>

        <Button onClick={toggleTheme}>
          Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
        </Button>

        <div className="space-y-4">
          <form onSubmit={addTodo} className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a todo..."
              className="flex-1 px-3 py-2 border rounded text-gray-800"
            />
            <Button type="submit">Add</Button>
          </form>

          <ul className="space-y-2">
            {todos.map((todo, index) => (
              <li
                key={index}
                onClick={() => toggleTodo(index)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={todo.completed}
                  readOnly
                />
                <span className={todo.completed ? 'line-through' : ''}>
                  {todo.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GeneratedApp;`;
      
      setGeneratedCode(mockGeneratedCode);
      
      // Create preview component with the same functionality
      const PreviewComponent = () => {
        const [count, setCount] = useState(0);
        const [theme, setTheme] = useState('light');
        const [todos, setTodos] = useState([]);
        const [newTodo, setNewTodo] = useState('');

        const toggleTheme = () => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        };

        const addTodo = (e) => {
          e.preventDefault();
          if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
          }
        };

        const toggleTodo = (index) => {
          const newTodos = [...todos];
          newTodos[index].completed = !newTodos[index].completed;
          setTodos(newTodos);
        };

        return (
          <div className={`p-6 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
            <h1 className="text-2xl font-bold mb-4">
              Interactive App: "{prompt}"
            </h1>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Button onClick={() => setCount(c => c - 1)}>-</Button>
                <span className="text-xl">{count}</span>
                <Button onClick={() => setCount(c => c + 1)}>+</Button>
              </div>

              <Button onClick={toggleTheme}>
                Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
              </Button>

              <div className="space-y-4">
                <form onSubmit={addTodo} className="flex gap-2">
                  <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a todo..."
                    className="flex-1 px-3 py-2 border rounded text-gray-800"
                  />
                  <Button type="submit">Add</Button>
                </form>

                <ul className="space-y-2">
                  {todos.map((todo, index) => (
                    <li
                      key={index}
                      onClick={() => toggleTodo(index)}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        readOnly
                      />
                      <span className={todo.completed ? 'line-through' : ''}>
                        {todo.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      };
      
      setPreviewApp(<PreviewComponent />);
    } catch (err) {
      setError('Failed to generate application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code2 className="h-6 w-6" />
                Application Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Describe the application you want to create:
                </label>
                <Textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Enter your application description..."
                  className="h-32"
                />
              </div>
              
              <Button
                onClick={generateApplication}
                disabled={!prompt.trim() || loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  'Generate Application'
                )}
              </Button>
            </CardContent>
          </Card>

          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {generatedCode && (
            <Card>
              <CardHeader>
                <CardTitle>Generated Code</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  <code>{generatedCode}</code>
                </pre>
              </CardContent>
            </Card>
          )}
        </div>

        <div>
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Layout className="h-6 w-6" />
                Live Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              {previewApp ? (
                <div className="border rounded-lg">
                  {previewApp}
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-gray-500 border rounded-lg">
                  Generate an application to see the preview
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppGenerator;
