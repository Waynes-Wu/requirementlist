export default function RequirementsSummary({ requirements }) {


    function handleExport() {
        // prints the filtered list of requirements in console
        
        const validRequirements = requirements.map(el => {
            const filteredReq = el.requirements.filter(req => req != '');
            // prints if there is requirements (category optional)
            if (filteredReq.length > 0) {
                return {
                    category: el.category !== '' ? el.category : 'unspecified',
                    requirements: filteredReq
                };
            }
            return null;
        }
        )
        console.log(JSON.stringify(validRequirements))
    }

    return (
        <div style={{
            flex: 1,
            marginLeft: '5%',
            marginRight: '5%'
        }}>
            <h2>Requirements Summary</h2>
            <hr style={{
                marginTop: '2%',
                marginBottom: '2%'
            }}></hr>
            {requirements.map((el) => (
                <>
                    <h4>{el.category != '' ? el.category : 'unspecified'}</h4>
                    <ul>
                        {el.requirements.map((requirement) => (
                            <li>{requirement}</li>
                        ))}
                    </ul>
                </>
            ))}
            <button
                onClick={handleExport}
                style={{ marginTop: '20px' }}>
                export </button>
        </div>
    )
}