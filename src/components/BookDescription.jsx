export function BookDescription({
  descriptionText,
  maxLength,
  isExpanded,
  toggleText,
}) {
  return (
    <div className="bg-white mr-0 mb-0 rounded-md p-4">
      <p className="font-semibold text-lg my-1">Description:</p>
      <hr className="border-t-2 border-gray-400 my-3" />
      <p className="text-justify">
        {descriptionText && descriptionText.length > maxLength && !isExpanded
          ? `${descriptionText.slice(0, maxLength)}... `
          : descriptionText}
        {descriptionText && descriptionText.length > maxLength && (
          <button onClick={toggleText} className="text-blue-500 underline ml-2">
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        )}
      </p>
    </div>
  );
}
