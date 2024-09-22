import CategoryTable from './CategoryTable'

export default function RequirementBlock({ requirements, setRequirements }) {

    function editData(categoryIndex, data) {
        // updates the new row data under a given category
        const requirementsCopy = [...requirements]
        requirementsCopy[categoryIndex] = data
        setRequirements(requirementsCopy)
    }

    function handlesAddCategory() {
        // add new category with default values
        setRequirements([...requirements, { category: '', requirements: [''] }])
    }

    return (
        <div style={{
            display: 'flex',
            flex: 2,
            flexDirection: 'column',
            alignItems: 'center',
            padding: '20px',
            backgroundColor: '#101010',
            borderRadius: '8px',
            justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
        }}>

            {requirements.map((categoryObj, categoryIndex) => (
                <CategoryTable key={categoryIndex}
                    data={categoryObj}
                    editData={(data) => editData(categoryIndex, data)}
                />
            ))}
            <button
                onClick={handlesAddCategory}
                style={{ margin: 'auto' }}> Add Category </button>
        </div>
    )
}