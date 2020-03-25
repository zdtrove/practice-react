import React from 'react';

const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomFilter(props) {
    const {
        rooms,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        handleChange,
    } = props.context;

    let types = getUnique(rooms, 'type').sort();
    types = ['all', ...types];
    types = types.map((type, index) =>
        <option key={index} value={type}>{type}</option>
    );

    let people = getUnique(rooms, 'capacity').sort((a, b) => a - b);
    people = people.map((item, index) =>
        <option key={index} value={item}>{item}</option>
    );
    return <section className="filter-container">
        <div className="section-title">
            <h4>search rooms</h4>
            <div></div>
        </div>
        <form className="filter-form">
            <div className="search-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" className="form-control" value={type} onChange={handleChange}>
                    {types}
                </select>
            </div>
            <div className="search-group">
                <label htmlFor="capacity">Guests</label>
                <select name="capacity" id="capacity" className="form-control" value={capacity} onChange={handleChange}>
                    {people}
                </select>
            </div>
            <div className="search-group">
                <label htmlFor="price">room price ${price}</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} value={price} onChange={handleChange} id="price" className="form-control" />
            </div>
            <div className="search-group">
                <label htmlFor="size">room size</label>
                <div className="size-inputs">
                    <input type="number" name="minSize" id="minSize" className="size-input" value={minSize} onChange={handleChange} />
                    <input type="number" name="maxSize" id="maxSize" className="size-input" value={maxSize} onChange={handleChange} />
                </div>
            </div>
            <div className="search-group">
                <div className="single-extra">
                    <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                    <label htmlFor="pets">pets</label>
                </div>
            </div>
        </form>
    </section>
}
