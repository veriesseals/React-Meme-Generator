import React from "react";

function Meme(){
    return(
        <div>
            <form>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="memeStart" class="form-label">Meme Start</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div class="mb-3">
                                <label for="memeEnd" class="form-label">Meme End</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <button type="submit" class="btn" id="submit">Get a new meme image 🎆</button>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default Meme;