//ligma
import React, {useEffect, useState} from 'react';


export default function GetFields(props) {
    const [fields, setFields] = useState([]);
    const [text, setText] = useState(props.data);

    function setTextList(field, txt) {
        var textOBJ = text;
        textOBJ[field] = txt;
        setText(textOBJ);
        if (props.onChange) {
            props.onChange(textOBJ);
        }
    }


    async function fetchWidgetTypes() {
        const response = await fetch('/api/widget/types');
        const data = await response.json();
        getFieldRequirementsForEachWidget(data);
    }

    function getFieldRequirementsForEachWidget(data) {
        var i=0;
        for (i = 0; i<data.length; i++) {
            if (props.type === data[i].type) {
                setFields(data[i].data);
            }
        }
    }

    function getDefaultData() {
        var bruhmoment;
        if (props.changed == 0) {
            bruhmoment =  props.defaultData;
        } else {
            bruhmoment = '';
        }
        return bruhmoment;
    }

    function undefinedText(text) {
        var output;
        if (text === undefined) {
            output = '';
        } else {
            output = text;
        }
        return output;
    }


    useEffect( () => {
        fetchWidgetTypes();
    }, [props]);

    useEffect( () => {
        setText({});
    }, [props.type]);

    return (
            <div>
                {Object.keys(fields).map(field =>(
                    <label>
                        {field}:
                        <br />
                        <input className='basePageTextBox' type="text" value={text.field} onChange={(e) => setTextList(field, e.target.value)} defaultValue={getDefaultData()[field]}/>
                        <br />
                        <br />
                    </label>
                ))}
                {embedHint()}
            </div>

        
    )

    function embedHint() {
        if (props.type === "embed") {
            return (
                <div> 
                    <p>To paste an embed link, just input the src link</p>
                    <p>For example if the embed link is "iframe width="916" height="515" src="https://www.youtube.com/embed/VUzoJrfJQBw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen iframe" the just use the link after "src" </p>
                    <p>i.e. "https://www.youtube.com/embed/VUzoJrfJQBw" without the quotes </p>
                </div>
            )
        }
    }
}
