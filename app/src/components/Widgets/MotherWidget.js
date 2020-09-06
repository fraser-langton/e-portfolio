import React from 'react';
import EmbedToHTML from './EmbedWidget';
import TextToHTML from './TextWidget';
import ImageToHTML from './ImageWidget';
import PortfolioToHTML from './PortfolioWidget';


export function MotherWidget({widget}) {
    const w_data = widget.data;
    if (widget.type === 'about') {
        return (
            <TextToHTML text={w_data.about} />
        );

    } else if (widget.type === 'image') {
        return (
            <ImageToHTML src={w_data.image_url} width={'100%'} height={'100%'} />
        );
    } else if (widget.type === 'embed') {
        return (
            <EmbedToHTML src={w_data.external_url} title={widget.public_id} />
        )
    } else if (widget.type === 'project') {
        return (
            <PortfolioToHTML name={w_data.name} desc={w_data.description} src={"http://"+w_data.external_url} />
        )
    }
}

export default MotherWidget;