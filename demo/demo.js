import React from 'react';
import VideoPlayer from '../src/video-player';

+function() {'use strict';

  const mountNode = document.getElementById('demo');

  React.render(<VideoPlayer title="Test"
                            desc="Simple test video"
                            src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
                            poster="https://peach.blender.org/wp-content/uploads/bbb-splash.png"/>, mountNode);
}()
