function PlaceMap() {
  return (
    <>
      <input type="checkbox" id="place-map-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="place-map-modal" className="btn btn-sm btn-circle absolute right-2 top-2">
            ✕
          </label>
          <h3 className="text-lg font-bold">Map View</h3>
          <p className="py-4">Here is the map i guess</p>
        </div>
      </div>
    </>
  )
}

export default PlaceMap
