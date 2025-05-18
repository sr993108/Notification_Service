import Notifications from './components/Notifications';
import NotificationForm from './components/NotificationForm'
import NotificationList from "./components/NotificationList.jsx"
function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Notification System</h1>
        
        <div className="bg-white rounded-lg shadow p-6">
          <NotificationForm />
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <NotificationList />
        </div>

        <Notifications />
      </div>
    </div>
  )
}

export default App
