function ChatAssistant() {
  return (
    <div className="fixed bottom-6 right-6 w-[350px] bg-[#111827] border border-gray-800 rounded-2xl shadow-2xl overflow-hidden">
      
      <div className="bg-blue-600 p-4">
        <h2 className="text-white text-lg font-semibold">
          AI Financial Assistant
        </h2>

        <p className="text-blue-100 text-sm">
          Ask anything about your expenses
        </p>
      </div>

      <div className="p-4 h-[300px] overflow-y-auto space-y-4">
        
        <div className="bg-[#1F2937] p-3 rounded-xl max-w-[85%]">
          <p className="text-white text-sm">
            Your highest spending category this month was shopping.
          </p>
        </div>

        <div className="bg-blue-600 p-3 rounded-xl ml-auto max-w-[85%]">
          <p className="text-white text-sm">
            How can I reduce expenses?
          </p>
        </div>

        <div className="bg-[#1F2937] p-3 rounded-xl max-w-[85%]">
          <p className="text-white text-sm">
            You can reduce food delivery expenses by 15% to save approximately ₹2000 monthly.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-800 p-4 flex gap-3">
        <input
          type="text"
          placeholder="Ask AI..."
          className="flex-1 bg-[#0B0F19] border border-gray-700 rounded-lg px-4 py-2 text-white outline-none"
        />

        <button className="bg-blue-600 text-white px-4 rounded-lg">
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatAssistant;