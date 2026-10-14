import{j as e}from"./iframe-EaglJ-EY.js";import"./index-qmVU2qX3.js";import{b as o,T as c,a as d,c as i,d as a,e as b}from"./table-cell-CcIF9LcX.js";import{T as t}from"./table-sort-label-9LZbXTwd.js";import"./preload-helper-Bs85Y4nq.js";const h=[{id:1,name:"Frozen yoghurt",calories:159,fat:6,carbs:24,protein:4},{id:2,name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4.3},{id:3,name:"Eclair",calories:262,fat:16,carbs:24,protein:6}],x={title:"Components/Data display/TableHead",component:o,parameters:{layout:"padded"},args:{}},r={render:s=>e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(o,{...s,children:e.jsxs(i,{children:[e.jsx(a,{variant:"head",scope:"col",children:"Dessert (100g serving)"}),e.jsx(a,{variant:"head",scope:"col",align:"right",children:"Calories"}),e.jsx(a,{variant:"head",scope:"col",align:"right",children:"Fat (g)"})]})}),e.jsx(b,{children:h.map(l=>e.jsxs(i,{hover:!0,children:[e.jsx(a,{children:l.name}),e.jsx(a,{align:"right",children:l.calories}),e.jsx(a,{align:"right",children:l.fat})]},l.id))})]})})},n={render:s=>e.jsx(c,{children:e.jsxs(d,{children:[e.jsx(o,{...s,children:e.jsxs(i,{children:[e.jsx(a,{variant:"head",scope:"col",sortDirection:"asc",children:e.jsx(t,{active:!0,direction:"asc",children:"Dessert (100g serving)"})}),e.jsx(a,{variant:"head",scope:"col",align:"right",children:"Calories"}),e.jsx(a,{variant:"head",scope:"col",align:"right",sortDirection:"desc",children:e.jsx(t,{active:!0,direction:"desc",children:"Fat (g)"})})]})}),e.jsx(b,{children:h.map(l=>e.jsxs(i,{hover:!0,children:[e.jsx(a,{children:l.name}),e.jsx(a,{align:"right",children:l.calories}),e.jsx(a,{align:"right",children:l.fat})]},l.id))})]})})},j=["Default","WithSortLabels"];r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => <TableContainer>
      <Table>
        <TableHead {...args}>
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
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => <TableContainer>
      <Table>
        <TableHead {...args}>
          <TableRow>
            <TableCell variant="head" scope="col" sortDirection="asc">
              <TableSortLabel active direction="asc">
                Dessert (100g serving)
              </TableSortLabel>
            </TableCell>
            <TableCell variant="head" scope="col" align="right">
              Calories
            </TableCell>
            <TableCell variant="head" scope="col" align="right" sortDirection="desc">
              <TableSortLabel active direction="desc">
                Fat&nbsp;(g)
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => <TableRow key={row.id} hover>
              <TableCell>{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>)}
        </TableBody>
      </Table>
    </TableContainer>
}`,...n.parameters?.docs?.source}}};export{r as Default,n as WithSortLabels,j as __namedExportsOrder,x as default};
