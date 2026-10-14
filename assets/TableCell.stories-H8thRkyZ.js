import{j as e}from"./iframe-J_BAxJ5R.js";import"./index-BSSMaTAd.js";import{d as l,T as t,a as c,b as d,c as n,e as h}from"./table-cell-Cr1pjICq.js";import"./preload-helper-Bs85Y4nq.js";const b=[{id:1,name:"Frozen yoghurt",calories:159,fat:6,carbs:24,protein:4},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{id:3,name:"Eclair",calories:262,fat:16,carbs:24,protein:6}],x={title:"Components/Data display/TableCell",component:l,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["head","body","footer"]},align:{control:"select",options:["left","center","right","justify"]},padding:{control:"select",options:["normal","checkbox","none"]},sortDirection:{control:"select",options:["","asc","desc"]},scope:{control:"text"},colSpan:{control:"number"},rowSpan:{control:"number"},component:{control:"select",options:["","td","th"]},children:{control:"text"}},args:{variant:"body",align:"left",padding:"normal",children:"Cell"}},i={render:r=>e.jsx(t,{children:e.jsxs(c,{children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{variant:"head",scope:"col",children:"Dessert (100g serving)"}),e.jsx(l,{variant:"head",scope:"col",align:"right",children:"Calories"}),e.jsx(l,{variant:"head",scope:"col",align:"right",children:"Fat (g)"})]})}),e.jsx(h,{children:b.map(a=>e.jsxs(n,{hover:!0,children:[e.jsx(l,{...r,children:a.name}),e.jsx(l,{align:"right",children:a.calories}),e.jsx(l,{align:"right",children:a.fat})]},a.id))})]})})},o={args:{variant:"head",sortDirection:"desc"},render:r=>e.jsx(t,{children:e.jsxs(c,{children:[e.jsx(d,{children:e.jsxs(n,{children:[e.jsx(l,{variant:"head",scope:"col",children:"Dessert (100g serving)"}),e.jsx(l,{...r,children:r.children}),e.jsx(l,{variant:"head",scope:"col",align:"right",children:"Protein (g)"})]})}),e.jsx(h,{children:b.map(a=>e.jsxs(n,{hover:!0,children:[e.jsx(l,{children:a.name}),e.jsx(l,{variant:"head",children:a.calories}),e.jsx(l,{align:"right",children:a.protein})]},a.id))})]})})},s={render:()=>e.jsx(t,{children:e.jsxs(c,{children:[e.jsxs(d,{children:[e.jsxs(n,{children:[e.jsx(l,{variant:"head",children:"Dessert"}),e.jsx(l,{variant:"head",colSpan:2,align:"center",children:"Nutrition (per 100g)"})]}),e.jsxs(n,{children:[e.jsx(l,{variant:"head"}),e.jsx(l,{variant:"head",align:"right",children:"Fat (g)"}),e.jsx(l,{variant:"head",align:"right",children:"Carbs (g)"})]})]}),e.jsxs(h,{children:[e.jsxs(n,{hover:!0,children:[e.jsx(l,{rowSpan:2,children:"Frozen yoghurt"}),e.jsx(l,{align:"right",children:"6"}),e.jsx(l,{align:"right",children:"24"})]}),e.jsxs(n,{hover:!0,children:[e.jsx(l,{align:"right",children:"9"}),e.jsx(l,{align:"right",children:"37"})]}),e.jsxs(n,{hover:!0,children:[e.jsx(l,{children:"Eclair"}),e.jsx(l,{colSpan:2,align:"center",children:"not available"})]})]})]})})},j=["Default","HeaderCells","SpanningCells"];i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head" scope="col">
              Dessert (100g serving)
            </TableCell>
            <TableCell variant="head" scope="col" align="right">
              Calories
            </TableCell>
            <TableCell variant="head" scope="col" align="right">
              Fat&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id} hover>
              <TableCell {...args}>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'head',
    sortDirection: 'desc'
  },
  render: args => <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head" scope="col">
              Dessert (100g serving)
            </TableCell>
            <TableCell {...args}>{args.children}</TableCell>
            <TableCell variant="head" scope="col" align="right">
              Protein&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell variant="head">{row.calories}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell variant="head">Dessert</TableCell>
            <TableCell variant="head" colSpan={2} align="center">
              Nutrition (per 100g)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell variant="head" />
            <TableCell variant="head" align="right">
              Fat&nbsp;(g)
            </TableCell>
            <TableCell variant="head" align="right">
              Carbs&nbsp;(g)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow hover>
            <TableCell rowSpan={2}>Frozen yoghurt</TableCell>
            <TableCell align="right">6</TableCell>
            <TableCell align="right">24</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell align="right">9</TableCell>
            <TableCell align="right">37</TableCell>
          </TableRow>
          <TableRow hover>
            <TableCell>Eclair</TableCell>
            <TableCell colSpan={2} align="center">
              not available
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
}`,...s.parameters?.docs?.source}}};export{i as Default,o as HeaderCells,s as SpanningCells,j as __namedExportsOrder,x as default};
