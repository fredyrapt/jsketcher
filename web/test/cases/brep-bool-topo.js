import {defineTests} from './craftTestUtils';

export default defineTests([

  {
    'name': 'CutInMiddle',
    'state': {
      'sketches': {'0:3': {'Segment': [[[-101, 100], [100, 100]], [[100, 100], [100, -100]], [[100, -100], [-101, -100]], [[-101, -100], [-101, 100]]]}},
      'operations': [{'type': 'BOX', 'params': {'width': 500, 'height': 500, 'depth': 500}}, {
        'type': 'CUT',
        'params': {'value': 250, 'prism': 1, 'angle': 0, 'rotation': 0, 'face': '0:3'}
      }]
    },
    'expected': {
      'format': 'LOOPS',
      'vertices': [[-250, -250, -250], [-250, -250, 250], [-250, -100, -101], [-250, -100, 100], [-250, 100, -101], [-250, 100, 100], [-250, 250, -250], [-250, 250, 250], [0, -100, -101], [0, -100, 100], [0, 100, -101], [0, 100, 100], [250, -250, -250], [250, -250, 250], [250, 250, -250], [250, 250, 250]],
      'faces': [[[12, 13, 1, 0]], [[14, 15, 13, 12]], [[6, 7, 15, 14]], [[7, 1, 13, 15]], [[12, 0, 6, 14]], [[4, 2, 8, 10]], [[2, 3, 9, 8]], [[3, 5, 11, 9]], [[5, 4, 10, 11]], [[11, 10, 8, 9]], [[6, 0, 1, 7], [3, 2, 4, 5]]]
    }
  },

  {
    'name': 'ExtrudeInMiddle',
    'state': {
      'sketches': {'0:3': {'Segment': [[[-101, 100], [100, 100]], [[100, 100], [100, -100]], [[100, -100], [-101, -100]], [[-101, -100], [-101, 100]]]}},
      'operations': [{'type': 'BOX', 'params': {'width': 500, 'height': 500, 'depth': 500}}, {
        'type': 'EXTRUDE',
        'params': {'value': 250, 'prism': 1, 'angle': 0, 'rotation': 0, 'face': '0:3'}
      }]
    },
    'expected': {
      'format': 'LOOPS',
      'vertices': [[-500, -100, -101], [-500, -100, 100], [-500, 100, -101], [-500, 100, 100], [-250, -250, -250], [-250, -250, 250], [-250, -100, -101], [-250, -100, 100], [-250, 100, -101], [-250, 100, 100], [-250, 250, -250], [-250, 250, 250], [250, -250, -250], [250, -250, 250], [250, 250, -250], [250, 250, 250]],
      'faces': [[[12, 13, 5, 4]], [[14, 15, 13, 12]], [[10, 11, 15, 14]], [[11, 5, 13, 15]], [[12, 4, 10, 14]], [[3, 9, 8, 2]], [[1, 7, 9, 3]], [[0, 6, 7, 1]], [[2, 8, 6, 0]], [[3, 2, 0, 1]], [[10, 4, 5, 11], [7, 6, 8, 9]]]
    }
  },

  {
    'name': 'cutThroughAdjacent',
    'state': {
      'sketches': {'0:3': {'Segment': [[[-101, 100], [100, 100]], [[100, 100], [100, -100]], [[100, -100], [-101, -100]], [[-101, -100], [-101, 100]]]}},
      'operations': [{'type': 'BOX', 'params': {'width': 500, 'height': 500, 'depth': 500}}, {
        'type': 'CUT',
        'params': {'value': 500, 'prism': 1, 'angle': 0, 'rotation': 0, 'face': '0:3'}
      }]
    },
    'expected': {
      'format': 'LOOPS',
      'vertices': [[-250, -250, -250], [-250, -250, 250], [-250, -100, -101], [-250, -100, 100], [-250, 100, -101], [-250, 100, 100], [-250, 250, -250], [-250, 250, 250], [250, -250, -250], [250, -250, 250], [250, -100, -101], [250, -100, 100], [250, 100, -101], [250, 100, 100], [250, 250, -250], [250, 250, 250]],
      'faces': [[[8, 9, 1, 0]], [[6, 7, 15, 14]], [[7, 1, 9, 15]], [[8, 0, 6, 14]], [[4, 2, 10, 12]], [[2, 3, 11, 10]], [[3, 5, 13, 11]], [[5, 4, 12, 13]], [[8, 14, 15, 9], [11, 13, 12, 10]], [[6, 0, 1, 7], [3, 2, 4, 5]]]
    }
  },
  
  {
    'name': 'Adjacent2Edges2Face',
    'state': {
      'sketches': {'0:3': {'Segment': [[[250, 250], [0, 250]], [[0, 250], [0, 0]], [[0, 0], [250, 0]], [[250, 0], [250, 250]]]}},
      'operations': [{'type': 'BOX', 'params': {'width': 500, 'height': 500, 'depth': 500}}, {
        'type': 'CUT',
        'params': {'value': 250, 'prism': 1, 'angle': 0, 'rotation': 0, 'face': '0:3'}
      }]
    },
    'expected': {
      'format': 'LOOPS',
      'vertices': [[-250, -250, -250], [-250, -250, 250], [-250, 0, 0], [-250, 0, 250], [-250, 250, -250], [-250, 250, 0], [0, 0, 0], [0, 0, 250], [0, 250, 0], [0, 250, 250], [250, -250, -250], [250, -250, 250], [250, 250, -250], [250, 250, 250]],
      'faces': [[[10, 11, 1, 0]], [[12, 13, 11, 10]], [[10, 0, 4, 12]], [[5, 2, 6, 8]], [[2, 3, 7, 6]], [[7, 9, 8, 6]], [[5, 8, 9, 13, 12, 4]], [[3, 2, 5, 4, 0, 1]], [[9, 7, 3, 1, 11, 13]]]
    }
  },

  {
    'name': 'VertexOnEdge',
    'state': {
      'sketches': {
        '0:4': {'Segment': [[[250, 140], [78, -146]], [[78, -146], [466, -131]], [[466, -131], [250, 140]]]},
      },
      'operations': [{'type': 'BOX', 'params': {'width': 500, 'height': 500, 'depth': 500}}, {
        'type': 'CUT',
        'params': {'value': 50, 'prism': 1, 'angle': 0, 'rotation': 0, 'face': '0:4'}
      }]
    },
    'expected': {
      'format': 'LOOPS',
      'vertices': [[-250, -250, -250], [-250, -250, 250], [-250, 250, -250], [-250, 250, 250], [78, -146, 200], [78, -146, 250], [250, -139, 200], [250, -250, -250], [250, -250, 250], [250, -139, 250], [250, 140, 200], [250, 140, 250], [250, 250, -250], [250, 250, 250]],
      'faces': [[[7, 8, 1, 0]], [[10, 6, 9, 8, 7, 12, 13, 11]], [[2, 3, 13, 12]], [[0, 1, 3, 2]], [[7, 0, 2, 12]], [[11, 5, 4, 10]], [[9, 6, 4, 5]], [[6, 10, 4]], [[9, 5, 11, 13, 3, 1, 8]]]
    }
  },

  {
    'name': 'AdjacentAndStickingOut',
    'state': {
      'sketches': {'0:3': {'Segment': [[[-510, 250], [91, 250]], [[91, 250], [91, -1]], [[91, -1], [-510, -1]], [[-510, -1], [-510, 250]]]}},
      'operations': [{'type': 'BOX', 'params': {'width': 500, 'height': 500, 'depth': 500}}, {
        'type': 'CUT',
        'params': {'value': 50, 'prism': 1, 'angle': 0, 'rotation': 0, 'face': '0:3'}
      }]
    },
    'expected': {
      'format': 'LOOPS',
      'vertices': [[-250, -250, -250], [-250, -250, 250], [-250, -1, -250], [-250, -1, 91], [-250, 250, 91], [-250, 250, 250], [-200, -1, -250], [-200, -1, 91], [-200, 250, -250], [-200, 250, 91], [250, -250, -250], [250, -250, 250], [250, 250, -250], [250, 250, 250]],
      'faces': [[[10, 11, 1, 0]], [[12, 13, 11, 10]], [[5, 1, 11, 13]], [[6, 8, 12, 10, 0, 2]], [[6, 2, 3, 7]], [[3, 4, 9, 7]], [[8, 6, 7, 9]], [[8, 9, 4, 5, 13, 12]], [[4, 3, 2, 0, 1, 5]]]
    }
  }
]);  

