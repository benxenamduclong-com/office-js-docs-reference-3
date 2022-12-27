| Class | Fields | Description |
|:---|:---|:---|
|[Presentation](/javascript/api/powerpoint/powerpoint.presentation)|[getSelectedShapes()](/javascript/api/powerpoint/powerpoint.presentation#powerpoint-powerpoint-presentation-getselectedshapes-member(1))|Returns the selected shapes in the current slide of the presentation.|
||[getSelectedSlides()](/javascript/api/powerpoint/powerpoint.presentation#powerpoint-powerpoint-presentation-getselectedslides-member(1))|Returns the selected slides in the current view of the presentation.|
||[getSelectedTextRange()](/javascript/api/powerpoint/powerpoint.presentation#powerpoint-powerpoint-presentation-getselectedtextrange-member(1))|Returns the selected PowerPoint.TextRange in the current view of the presentation.|
||[getSelectedTextRangeOrNullObject()](/javascript/api/powerpoint/powerpoint.presentation#powerpoint-powerpoint-presentation-getselectedtextrangeornullobject-member(1))|Returns the selected PowerPoint.TextRange in the current view of the presentation.|
||[setSelectedSlides(slideIds: string[])](/javascript/api/powerpoint/powerpoint.presentation#powerpoint-powerpoint-presentation-setselectedslides-member(1))|Selects the slides in the current view of the presentation.|
|[Shape](/javascript/api/powerpoint/powerpoint.shape)|[getParentSlide()](/javascript/api/powerpoint/powerpoint.shape#powerpoint-powerpoint-shape-getparentslide-member(1))|Returns the parent PowerPoint.Slide object that holds this `Shape`.|
||[getParentSlideLayout()](/javascript/api/powerpoint/powerpoint.shape#powerpoint-powerpoint-shape-getparentslidelayout-member(1))|Returns the parent PowerPoint.SlideLayout object that holds this `Shape`.|
||[getParentSlideLayoutOrNullObject()](/javascript/api/powerpoint/powerpoint.shape#powerpoint-powerpoint-shape-getparentslidelayoutornullobject-member(1))|Returns the parent PowerPoint.SlideLayout object that holds this `Shape`.|
||[getParentSlideMaster()](/javascript/api/powerpoint/powerpoint.shape#powerpoint-powerpoint-shape-getparentslidemaster-member(1))|Returns the parent PowerPoint.SlideMaster object that holds this `Shape`.|
||[getParentSlideMasterOrNullObject()](/javascript/api/powerpoint/powerpoint.shape#powerpoint-powerpoint-shape-getparentslidemasterornullobject-member(1))|Returns the parent PowerPoint.SlideMaster object that holds this `Shape`.|
||[getParentSlideOrNullObject()](/javascript/api/powerpoint/powerpoint.shape#powerpoint-powerpoint-shape-getparentslideornullobject-member(1))|Returns the parent PowerPoint.Slide object that holds this `Shape`.|
|[ShapeScopedCollection](/javascript/api/powerpoint/powerpoint.shapescopedcollection)|[getCount()](/javascript/api/powerpoint/powerpoint.shapescopedcollection#powerpoint-powerpoint-shapescopedcollection-getcount-member(1))|Gets the number of shapes in the collection.|
||[getItem(key: string)](/javascript/api/powerpoint/powerpoint.shapescopedcollection#powerpoint-powerpoint-shapescopedcollection-getitem-member(1))|Gets a shape using its unique ID.|
||[getItemAt(index: number)](/javascript/api/powerpoint/powerpoint.shapescopedcollection#powerpoint-powerpoint-shapescopedcollection-getitemat-member(1))|Gets a shape using its zero-based index in the collection.|
||[getItemOrNullObject(id: string)](/javascript/api/powerpoint/powerpoint.shapescopedcollection#powerpoint-powerpoint-shapescopedcollection-getitemornullobject-member(1))|Gets a shape using its unique ID.|
||[items](/javascript/api/powerpoint/powerpoint.shapescopedcollection#powerpoint-powerpoint-shapescopedcollection-items-member)|Gets the loaded child items in this collection.|
|[Slide](/javascript/api/powerpoint/powerpoint.slide)|[setSelectedShapes(shapeIds: string[])](/javascript/api/powerpoint/powerpoint.slide#powerpoint-powerpoint-slide-setselectedshapes-member(1))|Selects the specified shapes.|
|[SlideScopedCollection](/javascript/api/powerpoint/powerpoint.slidescopedcollection)|[getCount()](/javascript/api/powerpoint/powerpoint.slidescopedcollection#powerpoint-powerpoint-slidescopedcollection-getcount-member(1))|Gets the number of slides in the collection.|
||[getItem(key: string)](/javascript/api/powerpoint/powerpoint.slidescopedcollection#powerpoint-powerpoint-slidescopedcollection-getitem-member(1))|Gets a slide using its unique ID.|
||[getItemAt(index: number)](/javascript/api/powerpoint/powerpoint.slidescopedcollection#powerpoint-powerpoint-slidescopedcollection-getitemat-member(1))|Gets a slide using its zero-based index in the collection.|
||[getItemOrNullObject(id: string)](/javascript/api/powerpoint/powerpoint.slidescopedcollection#powerpoint-powerpoint-slidescopedcollection-getitemornullobject-member(1))|Gets a slide using its unique ID.|
||[items](/javascript/api/powerpoint/powerpoint.slidescopedcollection#powerpoint-powerpoint-slidescopedcollection-items-member)|Gets the loaded child items in this collection.|
|[TextFrame](/javascript/api/powerpoint/powerpoint.textframe)|[getParentShape()](/javascript/api/powerpoint/powerpoint.textframe#powerpoint-powerpoint-textframe-getparentshape-member(1))|Returns the parent PowerPoint.Shape object that holds this `TextFrame`.|
|[TextRange](/javascript/api/powerpoint/powerpoint.textrange)|[getParentTextFrame()](/javascript/api/powerpoint/powerpoint.textrange#powerpoint-powerpoint-textrange-getparenttextframe-member(1))|Returns the parent PowerPoint.TextFrame object that holds this `TextRange`.|
||[length](/javascript/api/powerpoint/powerpoint.textrange#powerpoint-powerpoint-textrange-length-member)|Gets or sets the length of the range that this `TextRange` represents.|
||[setSelected()](/javascript/api/powerpoint/powerpoint.textrange#powerpoint-powerpoint-textrange-setselected-member(1))|Selects this `TextRange` in the current view.|
||[start](/javascript/api/powerpoint/powerpoint.textrange#powerpoint-powerpoint-textrange-start-member)|Gets or sets zero-based index, relative to the parent text frame, for the starting position of the range that this `TextRange` represents.|