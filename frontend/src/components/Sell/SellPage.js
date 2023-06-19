export default function SellPage() {

    return (
        <>
            <h1>sell page</h1>
            <form>
                <label>Street address
                    <input type="text"/>
                </label>

                <label>City
                    <input type="text"/>
                </label>

                <label>State
                    <input type="text"/>
                </label>

                <label>Zip code
                    <input type="integer"/>
                </label>

                <label>Bed
                    <input type="integer"/>
                </label>

                <label>Bath
                    <input type="integer"/>
                </label>

                <label>Finished square feet
                    <input type="integer"/>
                </label>

                <label>Lot size
                    <input type="integer"/>
                </label>

                <label>Home type
                    <select>
                        <option >Single family</option>
                        <option >Condo</option>
                        <option >Townhouse</option>
                        <option >Multi family</option>
                        <option >Apartment</option>
                        <option >Mobile</option>
                        <option >Coop unit</option>
                        <option >Vacant land</option>
                        <option >Other</option>
                    </select>
                </label>

                <label>Describe your home
                    <textarea/>
                </label>

                <label>Set your price
                    <input type="integer"/>
                </label>

                <label>Year built
                    <input type="integer"/>
                </label>

                <button className="post-button">Post for sale by owner</button>
            </form>
        </>
    )
}