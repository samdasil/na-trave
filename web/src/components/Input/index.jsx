export const Input = ({name, label, ...props}) => (
    <div className="flex flex-col">
        <label htmlFor="{name}" className="text-sm font-bold text-gray-500 mb-2">{label}</label>
        <input id="{name}" name="{name}" {...props} className="p-3 border border-gray-700 rounded-xl focus:outline focus:outline-1 focus:outline-gray-700" />
    </div>    
)