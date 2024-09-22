
export default function CategoryTable({ key, data, editData }) {

    function handleCategoryChange(event) {
        // updates category only
        editData({ ...data, category: event.target.value })
    }

    function handleRequirementChange(event, requirementIndex) {
        // updates the changed value in a row
        const dataCopy = { ...data }
        dataCopy.requirements[requirementIndex] = event.target.value
        editData(dataCopy)
    }

    function handleAddRequirements() {
        // add a new forms 
        const requirementsCopy = [...data.requirements, '']
        editData({ ...data, requirements: requirementsCopy })
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>
                            Category: <input
                                placeholder="enter category"
                                defaultValue={data.category}
                                onChange={handleCategoryChange}></input>
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {data.requirements.map((requirement, requirementIndex) => (
                        <tr>
                            <td>Requirement:
                                <input
                                    placeholder="enter requirement"
                                    defaultValue={requirement}
                                    onChange={(event) => { handleRequirementChange(event, requirementIndex) }}></input></td>
                        </tr>
                    ))}
                    <tr>
                        <td>
                            <button
                                style={{ textAlign: 'center' }}
                                onClick={handleAddRequirements}> Add Requirement </button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </>
    )
}